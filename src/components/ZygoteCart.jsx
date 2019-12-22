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
import { Cart, openCart, addToCart, Totals, utils, addModification } from '@escaladesports/zygote-cart';
//import { Cart, openCart, addToCart, Totals, utils} from '@escaladesports/zygote-cart/src/export/utils/calculate-total';
//import { totalState } from '@escaladesports/zygote-cart/src/export/state/totals';

import * as EscaAPI from '@escaladesports/zygote-plugin-esca-api';

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
  
   // addModification(tenPercent);

  return(
    <>
    
    <Cart
      stripeApiKey="pk_test_kuLPajeHN54EmoQl9DN6OTXh00Nbu3XDXV"
      orderWebhook="/api/place-order"

      totalModifications={[
        {
          id: `shipping`,
          description: `Shipping`,
          value: 0,
          displayValue: `Free`,
        },
        // {
        //   id: `tax`,
        //   description: `Tax`,
        //   value: 325,
        //   displayValue: `Calculated at checkout`,
        // },
        {
          id: `sale-1`,
          description: `Super Sale!`,
          value: -2000,
        },
        //tenPercent,
      ]}

    />
    </>
  );
};

export default ZygoteCart;