import Stripe from 'stripe'


export default async function submitStripeOrder({ stripeApiSecret, body, verbose }) {

	if(verbose){
		
	}
	const stripe = Stripe(stripeApiSecret)
	if(typeof body === `string`){
		body = JSON.parse(body)
	}

	// Validate product prices & stock here
	console.log(`submitStripeOrder received from invoke:`, body)

	// Create empty result object to be sent later
	let res = {
		messages: {
			error: [],
		},
		meta: body.meta,
	}

	// Update shipping method
	if (body.selectedShippingMethod) {
		try {
			const req = await stripe.orders.update(res.meta.orderId, {
				selected_shipping_method: body.selectedShippingMethod,
			})
			res.success = true
			console.log(`submitStripeOrder received from Stripe after updated shipping:`, req)
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
			console.log(`submitStripeOrder received from Stripe after order placement:`, req)
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

	console.log(`submitStripeOrder returning:`, res)

	return res
}