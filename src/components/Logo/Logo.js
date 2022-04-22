import React from 'react';
import RectangleIcon from '@mui/icons-material/Rectangle';
import { Box } from '@mui/material';
import { useTheme } from '@mui/styles';
import { graphql, useStaticQuery } from 'gatsby';

function Logo() {
  const logoText = '>r.k';
  const theme = useTheme();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);

  return (
    <a href={data.site.siteMetadata.siteUrl} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          typography: 'logo',
          height: '40px',
          width: '40px',
          cursor: 'pointer',
        }}
      >
        {logoText}
        <RectangleIcon
          sx={{
            transform: 'rotate(90deg)',
            height: '100%',
            width: '100%',
            color: theme.palette.secondary.main,
          }}
        />
      </Box>
    </a>
  );
}

export default Logo;
