import React, { Fragment } from 'react';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
//import 'typeface-patua-one';
//import 'typeface-merriweather';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer, BurgerMenu, SocialIcons } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';

function Loading(props) {
  if (props.error) {
    return <div>Something went wrong! <button onClick= { props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Seems like your net is slow.. <button onClick={ props.retry }>Retry</button> </div>
  } else if (props.pastDelay) {
    return <p>Loading...</p>;
  } else {
    return null;
  }
}

const LoadableBurgerMenu = Loadable({
  loader: () => import('../components/BurgerMenu'),
  loading: Loading,
  delay: 500, // .5 seconds
  timeout: 150000, // 15 seconds
});


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
        

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }

          ${headroom}
        `}
      />
      <SEO />
      <LoadableBurgerMenu />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
