const coupons = async ({ response, info, preFetchData }) => {
//   if (info.coupon) {
//     const check = {
//       code: info.coupon,
//       order: {
//         products: response.products,
//       },
//     };
//   //////////////////////////////////////////////////////////////////
//   couponCodes = ['10_Off', '5_Off', 'March_Madness'];
//   function checkFunc(code, codeArr) {
//     let check = code;
//     let couponCodes = codeArr;

//     return couponCodes.includes(check.code)
//   }

//   let trueFalse = checkFunc(check, couponCodes);

//   if(trueFalse) {
//     response.modifications.push({
//       // Add valid coupon to modifications array
//       id: coupon.code,
//       description: coupon.label,
//       value: coupon.discount,
//       type: coupon.type,
//     });
//   }
//   //const { subtotal } = props.Totals.totalsState.state

//   // const tenPercent = ({
// 	// 	id: `10OFF`,
// 	// 	description: `10% off discount`,
// 	// 	displayValue: `-10%`,
// 	// 	value: () => {
// 	// 		return totalsState.State.subtotal * -.1
// 	// 	}
//   // })

//     await fetch(`https://api.com/coupons`, {
//       // Get packing dimensions
//       method: `post`,
//       body: JSON.stringify(check),
//     })
//       .then(res => res.json())
//       .then(coupon => {
//         if (coupon) {
//           if (!coupon.valid) {
//             // Not a valid coupon
//             response.messages.info.push(
//               coupon.reason && coupon.reason.length > 0
//                 ? `${coupon.error}. ${coupon.reason[0]}`
//                 : coupon.error
//             );
//             info.coupon = '';
//           } else {
//             response.modifications.push({
//               // Add valid coupon to modifications array
//               id: coupon.code,
//               description: coupon.label,
//               value: coupon.discount,
//               type: coupon.type,
//             });
//           }
//         }
//       })
//       .catch(error => console.log(`Request failed`, error));
//   }

//   return response;
// };
// console.log(`coupons plugin`);
// response.modifications.push({
//               // Add valid coupon to modifications array
//               id: '10_Off',
//               description: '10 Off',
//               value: -10,
//               type: 'discount',
//             });
// import Stripe from "stripe";

// // const coupons = async ({ response, info, preFetchData }) => {
// const coupons = async ({ response, info, preFetchData, data }) => {
//   var stripe = require('stripe')('sk_live_');

//   let coupon = stripe.coupons.retrieve(
//       info.coupon,
//       function(err, coupon) {
//         // asynchronously called
//       }
//     );

//   //************************************** */

//   const coupons = data.coupons.edges

//   let couponObj = {
//     id: '',
//     percent_off: 0,
//     valid: false,
//   }

//   couponObj = coupons.map(({ node: coupons }) => ({
//       id: coupons.id,
//       percent_off: coupons.percent_off,
//       valid: coupons.valid,
//     })
//   );
//   console.log(couponObj);
//   //*********************************** */

//   let discount = info.subtotal * coupon.percent_off;

//   if (info.coupon) {
//       const check = {
//           code: info.coupon,
//           order: {
//               products: response.products,
//           }
//       }

//       let coupon = {
//         code: '',
//         discount: 0,
//         label: '',
//         type: '',
//       };
//       if(check.code) {
//         let couponArray = couponObj.find(obj => obj.id == check.code)
//         coupon.code = couponArray.id;
//         coupon.discount = info.subtotal*couponArray.percent_off;
//         coupon.label = couponArray.name;
//         coupon.type = couponArray.object;
//       }

//       let coupon.discount = info.subtotal * coupon.percent_off;

//     //   await fetch(`https://api.com/coupons`, { // Get packing dimensions
//     //       method: `post`,
//     //       body: JSON.stringify(check),
//     // })
//     // .then(res => res.json())
//     .then(coupon => {
//       if (coupon) {
//         if (!coupon.valid) { // Not a valid coupon
//           response.messages.info.push(
//             coupon.reason && coupon.reason.length > 0 ? `${coupon.error}. ${coupon.reason[0]}` : coupon.error
//           )
//           info.coupon = ''
//         }
//         else {
//           response.modifications.push({ // Add valid coupon to modifications array
//             id: coupon.code,
//             description: coupon.label,
//             value: coupon.discount,
//             type: coupon.type
//           })
//         }
//       }
//     })
//     .catch(error => console.log(`Request failed`, error))
//   }

//   return response
// }

// export default coupons;

// export const query = graphql`
//   query Coupons {
//     coupons: allStripeCoupon {
//       edges{
//         node {
//           id
//           duration
//           percent_off
//           object
//         }
//       }
//     }
//   }`;

  return response
};

export default coupons