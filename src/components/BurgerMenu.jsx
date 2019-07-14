import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'gatsby';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { CartQty } from 'react-snipcart'


import styles from './styles';

//import styled from '@emotion/styled';
/* import React from "react";
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { slide as Menu } from "react-burger-menu"; */
/* 
export default props => {
    return (
      <BurgerMenu>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </BurgerMenu>
    );
}; */
 



const BurgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenuStateChange = state => {
    setMenuIsOpen(state.isOpen)
  }

  const handleMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <div id="outer-container">
      <div id="menu-wrap">
        <Menu
          right
          styles={styles}
          id="push"
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={menuIsOpen}
          onStateChange={handleMenuStateChange}
        >
          <div>
            <h1>Sweet Leaf Succulents</h1>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
            
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/catalog">Full Catalog</Link></h3>
            <h3><Link to="/about">About</Link></h3>
            <h3><Link to="/blog">Blog</Link></h3>
            <div>
              <a className="Header__summary snipcart-checkout snipcart-summary" href="#" >
                Cart: <CartQty />
                |<span class="snipcart-total-price"></span>
              </a>
            </div>

            </div>
        </Menu>
      </div>

      <main id="page-wrap">
       {/*  <button
          type="button"
          onClick={handleMenuButtonClick}
          className="btn btn-info btn-lg bg-inverse"
        /> */}
        

        
      </main>
    </div>
  )
}

export default BurgerMenu; 