import Stripe from 'stripe'
import noop from './noop'

export default async function submitStripeOrder({ stripeApiSecret, body, verbose }) {
	let log = noop
	let error = noop
	if(verbose){
		log = console.log
		error = console.error
	}
	const stripe = Stripe(stripeApiSecret)
	if(typeof body === `string`){
		body = JSON.parse(body)
	}

	// Validate product prices & stock here
	console.log(`submitStripeOrder received from invoke:`, body)

	// Create empty result object to be sent later
	let rel = {
		messages: {
			error: [],
		},
		meta: body.meta,
	}
	let res = {
		messages: {
			error: [],
		},
		meta: body.meta,
	}
		//Update shipping method
		if (body.shippingMethods) {
			try {
				const req = await stripe.orders.update(res.meta.orderId, {
					shipping_methods: body.shippingMethods,
				})
				rel.success = true
				console.log(`submitStripeOrder received from Stripe after updated shipping_methods:`, req)
			}
			catch (err) {
				error(err)
				if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
					rel.step = `cart`
					rel.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
				}
				else if (err.message) {
					rel.messages.error.push(err.message)
				}
				rel.success = false
			}
		}
	Update shipping method
	if (body.selectedShippingMethod) {
		try {
			const req = await stripe.orders.update(res.meta.orderId, {
				selected_shipping_method: ship_free-shipping, //body.selectedShippingMethod,
			})
			res.success = true
			log(`submitStripeOrder received from Stripe after updated selected_shipping_method:`, req)
		}
		catch (err) {
			error(err)
			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
				res.step = `cart`
				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
			}
			else if (err.message) {
				res.messages.error.push(err.message)
			}
			res.success = false
		}
	}

	// Pay for order
	if (res.success) {
		let req
		try {
			req = await stripe.orders.pay(res.meta.orderId, {
				email: body.infoEmail,
				source: body.payment.id,
			})
			res.success = req.status === `paid`
			log(`submitStripeOrder received from Stripe after order placement:`, req)
		}
		catch (err) {
			error(err)
			if (err.code === `out_of_inventory` || err.code === `resource_missing`) {
				res.step = `cart`
				res.messages.error.push(`Sorry! One or more items in your cart have gone out of stock. Please remove these products or try again later.`)
			}
			else if (err.message) {
				res.messages.error.push(err.message)
			}
			res.success = false
		}

	}

	res = {
		...body,
		...res,
	}

	log(`submitStripeOrder returning:`, res)

	return res
}