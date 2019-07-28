import React from 'react';

import fetchResources from './fetchResources';

export default({region}) => {
  const countries = fetchResources(region);

  return (<div className="ui teal segment">
    <h2 style={{
        fontFamily: 'Amatic SC'
      }}>{`${region.split('/')[1]} - ${countries.length} countries`}</h2>
    <div className="ui list" style={{
        marginBottom: '10px'
      }}>
      {countries.map(country => <div className="item" key={country.name}>{country.name}</div>)}
    </div>
  </div>);
};
