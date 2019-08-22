import React from 'react';
import PropTypes from 'prop-types';

const Button = ({buttonText, region, setRegion}) => {
  const className = `ui tiny teal ${buttonText === region
    ? 'active'
    : ''} button`;
  return (<button style={{
      marginTop: '5px'
    }} className={className} onClick={() => setRegion(buttonText)}>{buttonText.toUpperCase()}
  </button>);
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  setRegion: PropTypes.func.isRequired
};

export default Button;