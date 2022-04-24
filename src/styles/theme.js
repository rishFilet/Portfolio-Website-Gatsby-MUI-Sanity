import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    fontWeightRegular: 400,
    fontWeightBold: 700,
    textAlign: 'left',
    color: '#fff',
    h1: {
      color: '#F9A828',
      fontFamily: 'Prompt',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '28px',
      lineHeight: 1.2,
      fontFamily: 'Darker Grotesque',
      fontWeight: 600,
    },
    logo: {
      fontSize: 34,
      fontFamily: 'Prompt',
      fontWeight: 500,
      lineHeight: 1,
      color: '#F9A828',
    },
  },
  palette: {
    primary: {
      main: '#202026',
    },
    secondary: { main: '#F9A828' },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1930,
    },
  },
});

export default theme;
