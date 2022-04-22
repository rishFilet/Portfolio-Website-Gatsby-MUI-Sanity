import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function SectionContent({ children }) {
  return (
    <Box
      sx={{
        height: 'auto',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: { md: '60px', xs: '40px' },
        paddingRight: { lg: 0, md: '60px', xs: '40px' },
        gap: '30px',
      }}
    >
      {children}
    </Box>
  );
}

export default SectionContent;

SectionContent.propTypes = {
  children: PropTypes.node.isRequired,
};
