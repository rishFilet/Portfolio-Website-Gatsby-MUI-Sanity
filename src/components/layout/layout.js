import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, makeStyles } from '@mui/styles';
import theme from '@styles';
import Navbar from '../Navbar/Navbar';
import '@styles/global.css';

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
      <title>Rishi Khan Portfolio Website</title>
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
