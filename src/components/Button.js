import React from 'react';

export default({buttonText, region, setRegion}) => {
  const className = `ui tiny teal ${buttonText === region
    ? 'active'
    : ''} button`;
  return (<button style={{
      marginTop: '5px'
    }} className={className} onClick={() => setRegion(buttonText)}>{buttonText.toUpperCase()}
  </button>);
};
