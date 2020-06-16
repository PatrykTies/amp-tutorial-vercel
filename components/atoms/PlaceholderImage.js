import React from 'react';

const Placeholder = ({ imageAlternateTxt }) => {
  return (
    <img
      height={'250'}
      src={''}
      alt={imageAlternateTxt}
      aria-label="placeholder"
    />
  );
};

export default Placeholder;