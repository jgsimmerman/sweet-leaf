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


const Menu = styled.div`
  font-family: ${props => props.theme.fontFamily.body};

  
ul {
    padding: 0;
  }
  li {
    
    font-weight: 500;
    font-size: 1.1rem;
    list-style-type: none;
    margin-left: 30px;
  }
  a {
    color: ${props => props.theme.colors.white.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: 600px) {
    background: ${props => props.theme.colors.background.light};;
    padding: 10px 0;
    li {

      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;


{/**   Below Works   */}
/* const StyledLink = styled(Link)`
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
`; */

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
       {/*  <StyledLink to="/">
          <img src={logo} alt="Cactus Logo" />
        </StyledLink> */}
      <div>
        <ResponsiveMenu
          
          menuOpenButton={<FaBars size={30} color="black" />}
          menuCloseButton={<FaWindowClose size={30} color="black" />}
          changeMenuOn="600px"
          largeMenuClassName="large-menu"
          smallMenuClassName="small-menu"
          menu={
            <Menu>
              <img src={logo} alt="Cactus Logo" />
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
                    {/* |<span class="snipcart-total-price"></span> */}
                  </a>
                </li>
              </ul>
            </Menu>
            
          }
        />
       

      </div>
      <br/>  

      </Headroom>
    );
  }
}