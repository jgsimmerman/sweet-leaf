import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaReddit, FaEtsy } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const SocialWrapper = styled.span`
    display: flex;
    align-items: right;
    position: right;
`;

const SocialIcons = () => (

        <SocialWrapper className="SocialIcon">
            <SocialIcon url="https://www.facebook.com/" bgColor="#000000" />
            <SocialIcon url="http://twitter.com/jacobsimmerman" bgColor="#000000"/>
            <SocialIcon url="http://pinterest.com/jacobsimmerman" bgColor="#000000"/>
            <SocialIcon url="http://instagram.com/jacobsimmerman" bgColor="#000000" />
            <SocialIcon url="http://reddit.com/u/jacobsimmerman" bgColor="#000000" />
        </SocialWrapper> 
)

export default SocialIcons;