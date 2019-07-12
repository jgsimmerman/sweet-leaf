import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Header, BlogList } from 'components';
import { Layout } from 'layouts';
import { Grid, GridItem } from 'styled-grid-component';


const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Catalog1 = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      {/*<Helmet title={'Catalog'} /> */}
      {/* <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{'Catalog'}</title>
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script id="snipcart" src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="YjdiNWIyOTUtZTIyMy00MWMwLTkwNDUtMzI1M2M2NTgxYjE0"></script>
    </Helmet> */}
      <Header title="Catalog">Sweet Leaf Succulents and Ornamental Plants</Header>
      <CatalogWrapper>
          <Grid display="flex" flex-wrap="wrap" width="100%" height="100%" templateColumns="repeat(2, 1fr)" gap="70px" autoRows="max-content">
            <GridItem column="1" row="1" >
              <Img fluid={post.cover.childImageSharp.fluid} alt="" />
            </GridItem>
            <GridItem column="2 " row="1" >
              <Info>
                <ItemName>{post.title}</ItemName>
                <p><em>{post.scientificname}</em></p>
                <Cost><strong>${post.price}</strong></Cost>
                {/* <p className="ItemName">
                    {post.story}
                </p>  */}
                <BuyButton post={post}></BuyButton>
              </Info>
            </GridItem>  
          </Grid>
          <Grid>
            <br />
            <GridItem column=" 1 / 2" row="2">
              <p className="ItemName">
                  {post.story}
              </p>
            <br />
            </GridItem>
            <hr></hr>
          </Grid>
          <Grid display="flex" flex-wrap="wrap" width="80" height="100%" templateColumns="repeat(2, 1fr)" gap="70px" autoRows="max-content">
            <GridItem column="1" row="1" >
              <div>Primary Color:</div>
              <div>Stress Colors:</div>
              <div>Bloom Color:</div>
              
            </GridItem>
            <GridItem column="2 " row="1" >
              <div>{post.primarycolor}</div>
              <div>{post.stresscolors}</div>
              <div>{post.bloomcolor}</div>
              
            </GridItem>
            <GridItem column="3" row="1">
              <div>Pet Safe:</div>
              <div>Seasonality:</div> 
              <div>Temperature:</div>
            </GridItem>
            <GridItem column="4" row="1">
              <div>{post.petsafe}</div>
              <div>{post.seasonality}</div>
              <div>{post.temperature}</div>
            </GridItem>
          
          </Grid>
      </CatalogWrapper>
    </Layout>
  );
};

export default Catalog1;

Catalog1.propTypes = {
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

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            tags
            id
            price
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
