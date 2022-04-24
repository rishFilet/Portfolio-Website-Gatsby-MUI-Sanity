import React from 'react';
import {
  Box, Tooltip, Fade, tooltipClasses,
} from '@mui/material';
import { styled, withTheme } from '@mui/styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';

function Interests({ interests }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <>
      {interests.map((interest) => (
        <Box
          sx={{
            typography: 'h2',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { lg: 'flex-end', xs: 'flex-start' },
            gap: '8px',
            fontSize: { xxl: '28px', md: '22px', xs: '16px' },
          }}
        >
          {!isMobile && (
            <>
              <InterestText>{interest.text}</InterestText>
              <Box sx={{ height: '30px', width: '30px' }}>
                <GatsbyImage
                  image={interest.image.asset.gatsbyImageData}
                  alt={interest.alttext}
                />
              </Box>
            </>
          )}

          {isMobile && (
            <Box sx={{ height: '30px', width: '30px' }}>
              <IconTooltip
                TransitionComponent={Fade}
                disableFocusListener
                title={interest.text}
              >
                <div>
                  <GatsbyImage
                    image={interest.image.asset.gatsbyImageData}
                    alt={interest.alttext}
                  />
                </div>
              </IconTooltip>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
}

export default Interests;

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

const InterestText = withTheme(
  styled('p')(({ theme }) => ({
    margin: 0,
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  })),
);

const IconTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontFamily: 'Prompt',
    cursor: 'pointer',
  },
}));
