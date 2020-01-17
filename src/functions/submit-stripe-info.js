import Stripe from 'stripe'
import noop from './noop'

export default async function submitStripeInfo({ stripeApiSecret, body, verbose }) {
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

	log(`submitStripeInfo received from invoke:`, body)

	// Create empty result object to be sent later
	let res = {
		messages: {
			error: [],
		},
		modifications: [],
		meta: {},
	}

	// Create stripe order
	let order
	let orderType = `order`
	try {
		const obj = {
			currency: `usd`,
			email: body.infoEmail,
			items: body.products.map(({ id, quantity, type }) => {
				switch (type) {

				case `plan`:
					if (!body.customer)
						throw new Error(`You must sign in to purchase this subscription.`)
					orderType = `subscription`
					return {
						customer: body.customer,
						plan: id,
						quantity,
					}
				case `sku`:		
				default:
					return {
						type: type || `sku`,
						parent: id,
						quantity,
					}
				}
			}),
			shipping_methods: body.shippingMethods,
			shipping: {
				name: body.infoName,
				address: {
					line1: body.shippingAddress1,
					line2: body.shippingAddress2,
					city: body.shippingCity,
					postal_code: body.shippingZip,
					country: `US`,
				},
			},
			
		}
		if (body.coupon) {
			obj.coupon = body.coupon
		}
		// Determine if we are subscribing to plans, or placing an order
		switch (orderType) {

		case `subscription`:
			order = await stripe.subscriptions.create(obj)
			break
		
		case `order`:
		default:
			order = await stripe.orders.create(obj)
			break
		}

		res.success = true
		log(`submitStripeInfo received from Stripe:`, order)
	}
	catch (err) {
		order = {}
		error(`submitStripeInfo received error from Stripe:`, err)

		// Error messages
		// Create more consumer friendly inventory error message
		if (err.code === `out_of_inventory`) {
			let item = Number(err.param
				.replace(`items[`, ``)
				.replace(`]`, ``))
			if (body.products[item]) {
				res.step = `cart`
				res.messages.error.push(`Sorry! "${body.products[item].name}" is out of stock. Please lower the quantity or remove this product from your cart.`)
				const stock = await stripe.products.retrieve(body.products[item].id)
				let quantity = 999999
				stock.skus.data.forEach(sku => { // Scan for least quantity in product
					console.log(`sku:`, sku)
					quantity = sku.inventory && sku.inventory.quantity < quantity
						? sku.inventory.quantity
						: quantity
				})
				res.quantityModifications = [
					{ id: body.products[item].id, available: quantity },
				]
			}
		}
		else if (err.message) {
			res.messages.error.push(err.message)
		}

		if (err.param === `coupon`) {
			res.step = `info`
		}
		res.success = false
	}

	// Modifications
	if (order.items) {
		order.items.forEach(({ type, parent, amount, description }) => {
			if (type === `discount` || type === `tax` || type === `shipping`) {
				res.modifications.push({
					id: type === `discount` ? parent : type,
					value: amount,
					description,
				})
			}
		})
	}

	

	// Get shipping
	// if (order.shipping_methods) {
	// 	res.shippingMethods = order.shipping_methods.map(({ id, amount, description }) => {
	// 		return {
	// 			id,
	// 			value: amount,
	// 			description,
	// 		}
	// 	})
	// }

	// if (order.selected_shipping_method) {
	// 	res.selectedShippingMethod = order.selected_shipping_method
	// }

	// res.shippingMethods = [
	// 	{
	// 		id: `shipping-0`,
	// 		description: `Standard Shipping`,
	// 	},
	// 	{
	// 		id: `shipping-1`,
	// 		description: `Express Shipping`,
	// 	},
	// 	{
	// 		id: `shipping-2`,
	// 		description: `Overnight Shipping`,
	// 	},
	// ]
	// let subtotal = res.subtotal
	// let shippingOptions = [
	// 	{
	// 		id: `shipping-0`,
	// 		description: `Priority Shipping`,
	// 		value: (subtotal) => {
	// 			if (subtotal < 3000) {
	// 				return 795
	// 			} else if (subtotal < 4500) {
	// 				return 895
	// 			}
	// 			else if (subtotal < 5000) {
	// 				return 995
	// 			}
	// 			else if (subtotal >= 5000) {
	// 				return 0 //1195
	// 			}
	// 			// else if (subtotal > 7501) {
	// 			// 	return 0
	// 			// }
	// 		},
	// 		addInfo:  `Free priority shipping on orders over $50!`,
	// 	},
	// 	{
	// 		id: `shipping-1`,
	// 		description: `Express Shipping`,
	// 		value: (subtotal) => {
	// 			if (subtotal < 3000) {
	// 				return 1595
	// 			} else if (subtotal < 4500) {
	// 				return 1795
	// 			} else if (subtotal < 6000) {
	// 				return 1895
	// 			}
	// 			else if (subtotal < 7500) {
	// 				return 2195
	// 			}
	// 			else if (subtotal < 10500) {
	// 				return 3095
	// 			}
	// 			else if (subtotal < 14000) {
	// 				return 3395
	// 			}
	// 			else if (subtotal < 17500) {
	// 				return 4195
	// 			}
	// 			else if (subtotal < 21000) {
	// 				return 4795
	// 			}
	// 			else if (subtotal < 35000) {
	// 				return 5495
	// 			}
	// 			else if (subtotal < 50000) {
	// 				return 6796
	// 			}
	// 			else if (subtotal < 75000) {
	// 				return 7995
	// 			}
	// 			else if (subtotal <= 100000) {
	// 				return 9695
	// 			}
	// 			else if (subtotal > 100000) {
	// 				return 9695
	// 			}
	// 		},
	// 		addInfo: ``,
	// 	},
	// 	{
	// 		id: `shipping-2`,
	// 		description: `Overnight Shipping`,
	// 		value: (subtotal) => {
	// 			if (subtotal < 3000) {
	// 				return 2995
	// 			} else if (subtotal < 4500) {
	// 				return 3295
	// 			} else if (subtotal < 6000) {
	// 				return 3495
	// 			}
	// 			else if (subtotal < 7500) {
	// 				return 3995
	// 			}
	// 			else if (subtotal < 10500) {
	// 				return 5695
	// 			}
	// 			else if (subtotal < 14000) {
	// 				return 5995
	// 			}
	// 			else if (subtotal < 17500) {
	// 				return 7195
	// 			}
	// 			else if (subtotal < 21000) {
	// 				return 8195
	// 			}
	// 			else if (subtotal < 35000) {
	// 				return 8995
	// 			}
	// 			else if (subtotal < 50000) {
	// 				return 10995
	// 			}
	// 			else if (subtotal < 75000) {
	// 				return 12595
	// 			}
	// 			else if (subtotal <= 100000) {
	// 				return 14995
	// 			}
	// 			else if (subtotal > 100000) {
	// 				return 16995
	// 			}
	// 		},
	// 		addInfo: ``,
	// 	},
	// ]

	// res.shippingMethods = shippingOptions.map(option => (
	// 	{
	// 		id: option.id,
	// 		description: option.description,
	// 		value: option.value(subtotal),
	// 		addInfo: `${option.addInfo}`,
	// 	}
	// ))

	res.selectedShippingMethod = 'shipping'
	// res.selectedShippingMethod = {
	// 	ship1: `method1`,
	// 	ship2: `method1`,
	// }	
	//res.selectedShippingMethod = shippingMethods[0]
	
	if (order.id) {
		res.meta.orderId = order.id
	}

	res = {
		...body,
		...res,
	}

	log(`submitStripeInfo returning:`, res)

	return res
}