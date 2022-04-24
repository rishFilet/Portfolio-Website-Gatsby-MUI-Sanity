/* eslint-disable no-unused-vars */
import React from 'react';
import { withTheme } from '@mui/styles';
import styled from '@mui/styled-engine';
import Logo from '../Logo/Logo';

function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {/* <NavItemsContainer>
        <NavItem>Home</NavItem>
      </NavItemsContainer> */}
    </Container>
  );
}

export default Navbar;

const Container = withTheme(
  styled('div')(({ theme }) => ({
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    justifyContent: 'space-between',
    maxWidth: '100vw',
    width: '100%',
    top: 0,
    left: 0,
  })),
);

const LogoContainer = withTheme(
  styled('div')(({ theme }) => ({
    height: '100px',
    width: '100px',
    marginLeft: '25px',
    marginTop: '25px',
  })),
);

const NavItemsContainer = withTheme(
  styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '25px',
  })),
);

const NavItem = withTheme(
  styled('p')(({ theme }) => ({
    color: '#fff',
    fontSize: 16,
  })),
);
