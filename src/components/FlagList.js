import React from 'react';

import fetchResources from './fetchResources';

export default() => {
  const countries = fetchResources('all');

  return (<div className="ui teal segment" style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: '10px 0'
    }}>
    {
      countries.map(country => <img key={country.name} style={{
          height: '15px'
        }} src={country.flag} alt={country.name}/>)
    }
  </div>);
};
