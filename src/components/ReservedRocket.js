import React from 'react';
import PropTypes from 'prop-types';

const ReservedRocket = ({ name }) => (
  <>
    <span>
      {' '}
      {name}
    </span>
  </>
);

ReservedRocket.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ReservedRocket;
