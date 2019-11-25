import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
//import { CartQty } from 'react-snipcart'


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

  .snipcart-items-count {
    vertical-align: top;
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    
      display: none;
  }
`;

/******************************************
 * 
 * Commented Out NavBar media query
 * 
 * Remember to undo the commenting out!!!!
 * 
 * IMPORTANT
 * 
 *******************************************/
const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src="" alt="" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <div>
        <a className="Header__summary snipcart-checkout snipcart-summary" href="#" >
          <FaShoppingCart /> <span className="snipcart-items-count"></span>
          {/* |<span className="snipcart-total-price"></span> */}
        </a>
      </div>
    </Nav>
  </Headroom>
);

export default NavBar;

