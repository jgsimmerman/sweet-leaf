import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import Helmet from 'react-helmet';
import BuyButton from './BuyButton'
import Img from 'gatsby-image'
import { Grid, GridItem } from 'styled-grid-component';

const Wrapper = styled.div`
  padding: 1rem 0 2rem 0
  display: flex
  flex-wrap: wrap
  flex-direction: column
`

const Image = styled.span`
  background: #eee
  flex: 1
  min-height: 50vh
`

const Info = styled.span`
  margin-top: 2rem
  flex: 1
`

const ItemName = styled.h3`
  margin: 1rem 0 .5rem 0
`

const Cost = styled.span`
  color: lighten($black, 20%)
  font-size: 1.5rem
  margin: 1rem 0
  font-weight: 500
`
const StyledImg = styled(Img)`
  display: block
  margin: 0 auto
  width: 10%
`
const Story = styled.p`
  grid-column-start: span 2
`


const ItemContent = ({ post }) => {
  
  return (
    <Wrapper>
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
        <Grid display="flex" flex-wrap="wrap" width="50%" height="100%" templateColumns="repeat(2, 1fr)" gap="70px" autoRows="max-content">
          <GridItem column="1" row="1" >
            <div>Primary Color:</div>
            <div>Stress Colors:</div>
            <div>Pet Safe:</div>
            <div>Seasonality:</div> 
          </GridItem>
          <GridItem column="2 " row="1" >
            <div>{post.primarycolor}</div>
            <div>{post.stresscolors}</div>
            <div>{post.petsafe}</div>
            <div>{post.seasonality}</div>
          </GridItem>
         
        </Grid>
    </Wrapper>    
  )
}




export default ItemContent;
