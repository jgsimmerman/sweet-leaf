import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';
import Helmet from 'react-helmet';
import BuyButton from '../components/BuyButton'


const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const date = post.frontmatter.date;
  const html = post.html;
  return (
    <Layout>
      <Helmet
          htmlAttributes={{ lang: 'en' }}
         
          link={[{
            href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
            rel:"stylesheet",
            type:"text/css" 
          }]}
          script={[{ 
            type: 'text/javascript',
            id: "snipcart",
            "data-api-key": "OWRmMjdlZWUtNzM1NS00YmQzLWFlN2EtOGU2MTIyOGQyZDQ4NjM2OTUwMjk5ODUzNDc5OTgw",
            src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
          },{
            type: 'text/javascript',
            src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
          }]}
        />
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      <Header title={title} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={post.frontmatter.tags || []} />
      </Container>
      <BuyButton post={post.frontmatter}></BuyButton>

      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        id
        price
        path
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
