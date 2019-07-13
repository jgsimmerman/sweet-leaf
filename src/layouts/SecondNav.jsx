import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  }
`;

const SecondNav = () => (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </Nav>
);

export default SecondNav;