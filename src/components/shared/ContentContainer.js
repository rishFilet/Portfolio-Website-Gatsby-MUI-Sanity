import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function ContentContainer({ children }) {
  return (
    <Box
      sx={{
        height: 'auto',
        width: 'auto',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        gap: { lg: 0, xs: '60px' },
      }}
    >
      {children}
    </Box>
  );
}

export default ContentContainer;

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
