import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: grey;
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

const SecondNav = () => {
  return (   
      <Nav>      
        <Link to="/catalog/echeveria">Echeveria</Link>
        <Link to="/catalog/sempervivum-heuffelii">Sempervivum Heuffelii</Link>
        <Link to="/catalog/aeonium">Aeonium</Link>
        <Link to="/catalog/senecio">Senecio</Link>
        <Link to="/catalog/soft-sedum">Soft Sedum</Link>
        <Link to="/catalog/hybrids">Hybrids</Link>
        <Link to="/catalog/more-soft-varieties">More Soft Varieties</Link>
      </Nav>
  );
}

export default SecondNav;