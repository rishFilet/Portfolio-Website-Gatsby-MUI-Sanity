import { Box } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function SectionContentTitle({ title }) {
  return (
    <Box
      sx={{
        typography: 'h1',
        fontSize: { xxl: '59px', md: '50px', xs: '36px' },
      }}
    >
      {title}
    </Box>
  );
}

export default SectionContentTitle;

SectionContentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
