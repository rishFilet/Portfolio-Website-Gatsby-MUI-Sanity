import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function SectionTitleContainer({ title, content }) {
  return (
    <Box
      sx={{
        height: 'auto',
        width: 'auto',
        minWidth: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        typography: 'h1',
        color: '#fff',
        borderRight: '3px solid #fff',
        paddingLeft: { lg: 0, md: '60px', xs: '40px' },
        paddingRight: { md: '60px', xs: '40px' },
        fontSize: { xxl: '48px', xs: '38px' },
        letterSpacing: 0,
        textAlign: { lg: 'right', sm: 'left' },
        gap: '25px',
      }}
    >
      {title}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { lg: 'column', xs: 'row' },
          gap: { lg: '10px', xs: '15px' },
          flexWrap: 'wrap',
          justifyContent: { sm: 'flex-start', xs: 'space-between' },
        }}
      >
        {content}
      </Box>
    </Box>
  );
}

export default SectionTitleContainer;

SectionTitleContainer.defaultProps = {
  content: null,
};
SectionTitleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};
