import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
const Display = ({ routeResponse }) => {
  return (<>
    <ReactJson src={routeResponse} />
  </>);
};

Display.propTypes = {
  routeResponse: 
  PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Display;
