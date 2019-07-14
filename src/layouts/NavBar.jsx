import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import { CartQty } from 'react-snipcart'
import PropTypes from 'prop-types';
import ResponsiveMenu from 'react-responsive-navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { BurgerMenu } from 'layouts';



const Menu = styled.div`

ul {
  padding: 0;
}
li {
  display: inline;
  font-size: 13px;
  list-style-type: none;
  margin-left: 30px;
}
a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  color: ${props => props.theme.colors.white.base};
  &:hover {
    color: ${props => props.theme.colors.white.grey};
  }
}
@media (max-width: 750px) {
  padding: 10px 0;
  ul {
    background: gray;
    width: 150%;
    justify: center;
  }
  li {
    color: black;
    padding: 10px 0;
    display: block;
    margin-left: 0;
  }
}
`;


{/**   Below Works   */}
const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`; 

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

/* const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Cactus Logo" />
    </StyledLink>
    <Nav className="navbar">
      <FaBars />
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
      
      <div>
          <FaBars size={30} color="white" />
          
      </div>
    </Nav>
  </Headroom>
);

export default NavBar; */

export default class NavBar extends Component {
  render() {
    return (

      <Headroom calcHeightOnResize disableInlineStyles>
        
        {/* <img src={logo} alt="Cactus Logo" /> */}
      <div>{/* 
        <ResponsiveMenu
          
          menuOpenButton={<FaBars size={30} color="black" />}
          menuCloseButton={<FaWindowClose size={30} color="black" />}
          changeMenuOn="750px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/catalog">Full Catalog</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <a className="Header__summary snipcart-checkout snipcart-summary" href="#" >
                      Cart: <CartQty />
                     |<span class="snipcart-total-price"></span> 
                  </a>
                </li>
              </ul>
            </Menu>
            
          }
        /> */}
       
        <BurgerMenu right/>
        <StyledLink to="/">
          <img src={logo} alt="Cactus Logo" />
        </StyledLink>  
      </div>
      <br/>  

      </Headroom>
    );
  }
}