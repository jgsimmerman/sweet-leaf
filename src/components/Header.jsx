import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';


const Wrapper = styled.header`
  
  @media (max-width: ${props => props.theme.breakpoints.s}) {
   
  }
  background: ${props => props.theme.gradient.rightToLeft};
  height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

const SocialWrapper = styled.span`
display: flex;
align-items: right;
position: right;
/* width: 75%;
height: 75%; */
`;

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} />
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>

      {children && <Subtitle>{children}</Subtitle>}
    </Text>
    {/* 
      <SocialWrapper className="SocialIcon">
          <SocialIcon url="https://www.facebook.com/" bgColor="#000000" />
          <SocialIcon url="http://twitter.com/jacobsimmerman" bgColor="#000000"/>
          <SocialIcon url="http://pinterest.com/jacobsimmerman" bgColor="#000000"/>
          <SocialIcon url="http://instagram.com/jacobsimmerman" bgColor="#000000" />
          <SocialIcon url="http://reddit.com/u/jacobsimmerman" bgColor="#000000" />
      </SocialWrapper> 
      */}
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
