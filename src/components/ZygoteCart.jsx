import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
//import { TagsBlock, Header, SEO, SecondNav, Zygote } from 'components';
import Helmet from 'react-helmet';
import BuyButton from './BuyButton';
import Img from 'gatsby-image';
import { Grid, GridItem } from 'styled-grid-component';

import { Cart, getShippingMethods, preInfo, Shipping } from 'cart';


const ZygoteCart = props => {

  //const { subtotal } = props.Totals.totalsState.state

  // const tenPercent = ({
	// 	id: `10OFF`,
	// 	description: `10% off discount`,
	// 	displayValue: `-10%`,
	// 	value: () => {
	// 		return totalsState.State.subtotal * -.1
	// 	}
  // })
  
  
   
  return(
    
    <Cart
     //stripeApiKey="pk_live_nMctV4G1movcajzQsjXet2Zs000zybvAUV"
     stripeApiKey="pk_test_Vc8z3p2pdxHFQgxhbbhIXtyv00GnPddsjV"
    
      //stripeApiKey=`${process.env.STRIPE_API_PUBLIC}`
      infoWebhook='/.netlify/functions/info-stripe'
      orderWebhook='/.netlify/functions/order-stripe'
      //  infoWebhook='https://afda6f56.ngrok.io/.netlify/functions/info-stripe'
      //  orderWebhook='https://afda6f56.ngrok.io/.netlify/functions/order-stripe'
      shippingWebhook='.netlify/functions/shipping-stripe'
      
      plugins={[ 
        // getShippingMethods, 
        // preInfo, 
        // Shipping
        //coupons,
      ]}

      cartHeader={<div>Sweet Leaf </div>}

      

      // totalModifications={[
       
      //     {
      //       id: '50OFF', // Coupon code
      //       description: 'Spring savings event', // Used in subtotal as a label
      //       value: '-5000', // Negative, cent representation of discount
      //       type: 'discount' // Metadata you can later use in your plugins
      //     }
        
      // ]}
     
    />
    
  );
};

export default ZygoteCart;