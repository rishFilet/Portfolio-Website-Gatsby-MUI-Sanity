import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, makeStyles } from '@mui/styles';
import theme from '@styles';
import Navbar from '../Navbar/Navbar';
import '@styles/global.css';
import SEO from './seo';

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: '#202026',
      color: '#fff',
      fontFamily: 'Open Sans',
    },
  },
});

function Layout({ children }) {
  useGlobalStyles();
  return (
    <main>
      <SEO />
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
