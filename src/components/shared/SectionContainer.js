import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  section: {
    height: '100%',
    minHeight: '95vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

function SectionContainer({ children }) {
  const classes = useStyles();
  return <div className={classes.section}>{children}</div>;
}

export default SectionContainer;

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
