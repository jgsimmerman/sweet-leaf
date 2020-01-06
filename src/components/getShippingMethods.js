// eslint-disable-next-line no-unused-vars
const getShippingMethods = async ({ response, info, preFetchData }) => {
	
	// const shipping = {
	// 	destination: {
	// 		street1: info.shippingAddress1,
	// 		street2: info.shippingAddress2,
	// 		city: info.shippingCity,
	// 		state: info.shippingStateAbbr,
	// 		zip: info.shippingZip,
	// 		country: `US`,
	// 		company: info.shippingCompany || ``,
	// 		phone: info.infoPhone || ``,
	// 	},
	// 	products: response.products,
	// 	subtotal: info.subtotal,
	// }
	
	let subtotal = info.subtotal

	let shippingMethods = []


	// // eslint-disable-next-line no-undef
	// await fetch(`shipWebhook`, {
	// 	method: `post`,
	// 	body: JSON.stringify(shipping),
	// })
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		if (data.errors) {
	// 			throw Error(data.errors)
	// 		}

	// 		shippingMethods = data.shippingOptions.map(option => (
	// 			{
	// 				id: option.id,
	// 				description: option.label,
	// 				value: option.value,
	// 				addInfo: option.addInfo,
	// 			}
	// 		))
	// 	})

	

	let shippingOptions = [
		{
			id: `shipping-0`,
			description: `Priority Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 800
				} else if (subtotal < 4500) {
					return 900
				}
				else if (subtotal < 5000) {
					return 1000
				}
				else if (subtotal >= 5000) {
					return 0 //1195
				}
				// else if (subtotal > 7501) {
				// 	return 0
				// }
			},
			addInfo:  `Free priority shipping on orders over $50!`,
		},
		{
			id: `shipping-1`,
			description: `Express Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 1600
				} else if (subtotal < 4500) {
					return 1800
				} else if (subtotal < 6000) {
					return 1900
				}
				else if (subtotal < 7500) {
					return 2200
				}
				else if (subtotal < 10500) {
					return 3100
				}
				else if (subtotal < 14000) {
					return 3400
				}
				else if (subtotal < 17500) {
					return 4200
				}
				else if (subtotal < 21000) {
					return 4800
				}
				else if (subtotal < 35000) {
					return 5500
				}
				else if (subtotal < 50000) {
					return 6800
				}
				else if (subtotal < 75000) {
					return 8000
				}
				else if (subtotal <= 100000) {
					return 9700
				}
				else if (subtotal > 100000) {
					return 9700
				}
			},
			addInfo: ``,
		},
		{
			id: `shipping-2`,
			description: `Overnight Shipping`,
			value: (subtotal) => {
				if (subtotal < 3000) {
					return 3000
				} else if (subtotal < 4500) {
					return 3300
				} else if (subtotal < 6000) {
					return 3500
				}
				else if (subtotal < 7500) {
					return 4000
				}
				else if (subtotal < 10500) {
					return 5700
				}
				else if (subtotal < 14000) {
					return 6000
				}
				else if (subtotal < 17500) {
					return 7200
				}
				else if (subtotal < 21000) {
					return 8200
				}
				else if (subtotal < 35000) {
					return 9000
				}
				else if (subtotal < 50000) {
					return 11000
				}
				else if (subtotal < 75000) {
					return 12600
				}
				else if (subtotal <= 100000) {
					return 15000
				}
				else if (subtotal > 100000) {
					return 17000
				}
			},
			addInfo: ``,
		},
	]

	shippingMethods = shippingOptions.map(option => (
		{
			id: option.id,
			description: option.description,
			value: option.value(subtotal),
			addInfo: `${option.addInfo}`,
		}
	))

	console.log(shippingMethods);
	return {
		...response,
		methods: shippingMethods,
		selected: shippingMethods[0], // Default selected method
	}
}

export default {getShippingMethods}