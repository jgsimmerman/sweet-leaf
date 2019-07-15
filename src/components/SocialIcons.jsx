import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const SocialWrapper = styled.span`
display: flex;
align-items: right;
position: right;
/* width: 75%;
height: 75%; */
`;

const SocialIcons () => (

        <SocialWrapper className="SocialIcon">
            <SocialIcon url="https://www.facebook.com/" bgColor="#000000" />
            <SocialIcon url="http://twitter.com/jacobsimmerman" bgColor="#000000"/>
            <SocialIcon url="http://pinterest.com/jacobsimmerman" bgColor="#000000"/>
            <SocialIcon url="http://instagram.com/jacobsimmerman" bgColor="#000000" />
            <SocialIcon url="http://reddit.com/u/jacobsimmerman" bgColor="#000000" />
        </SocialWrapper> 

)

export default SocialIcons;