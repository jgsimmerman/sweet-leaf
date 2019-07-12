import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { SocialIcon } from 'react-social-icons';
import Img from 'gatsby-image'

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  .SocialIcon {
    display: flex;
    align-items: right;
    width: 25px;
    height: 25px;
  }
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const SocialWrapper = styled.span`
display: flex;
align-items: right;
position: right;
/* width: 75%;
height: 75%; */
`

const IndexContent = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Sweet Leaf Succulents'} />

      <Header title="Sweet Leaf Succulents">{/* and Ornamental Plants */}
        <SocialWrapper className="SocialIcon">
          <SocialIcon url="https://www.facebook.com/" bgColor="#000000" />
          <SocialIcon url="http://twitter.com/jacobsimmerman" bgColor="#000000"/>
          <SocialIcon url="http://pinterest.com/jacobsimmerman" bgColor="#000000"/>
          <SocialIcon url="http://instagram.com/jacobsimmerman" bgColor="#000000" />
          <SocialIcon url="http://reddit.com/u/jacobsimmerman" bgColor="#000000" />
        </SocialWrapper>
      </Header>
      <PostWrapper>
        <div>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />  
            <Link to="/catalog/echeveria/">Echeveria</Link>      
        </div>
      </PostWrapper>
    </Layout>
  );
};

export default IndexContent;

IndexContent.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    } 
  }
`