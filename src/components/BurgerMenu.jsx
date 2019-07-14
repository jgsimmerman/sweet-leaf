import React, { useState } from 'react'
import { push as Menu } from 'react-burger-menu'
import { Link } from 'gatsby';
import { FaBars, FaWindowClose } from 'react-icons/fa';

import styles from './styles';

//import styled from '@emotion/styled';
/* import React from "react";
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { slide as Menu } from "react-burger-menu"; */


/* export default props => {
    return (
      <BurgerMenu>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
      </BurgerMenu>
    );
};
 */



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
          styles={styles}
          id="push"
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={menuIsOpen}
          onStateChange={handleMenuStateChange}
        >
          <div>
            <h1>Sidebar</h1>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
          </div>
        </Menu>
      </div>
      <FaBars onClick={handleMenuButtonClick}/>
      {<main id="page-wrap">
      

        
      </main>}
    </div>
  )
}

export default BurgerMenu;