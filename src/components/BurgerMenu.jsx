import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'gatsby';
import styled from '@emotion/styled';

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
 
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: left;
  a {
    color: ${props => props.theme.colors.white.grey};
    margin: .5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;


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
          /* right */
          styles={styles}
          id="push"
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          menuItem="menu-item"
          isOpen={menuIsOpen}
          onStateChange={handleMenuStateChange}
        >
          <div>
            <h1>Sweet Leaf Succulents</h1>

            <Nav className="navbar">
     
              <Link to="/">Home</Link>
              <Link to="/catalog">Full Catalog</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              
              <div>
                <a className="Header__summary snipcart-checkout snipcart-summary" href="#" >
                  Cart: <CartQty />
                  |<span class="snipcart-total-price"></span>
                </a>
              </div>
              
            </Nav>
          
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