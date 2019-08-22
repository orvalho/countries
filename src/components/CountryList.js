import React from 'react';
import PropTypes from 'prop-types';
import fetchResources from './fetchResources';

const CountryList = ({region}) => {
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

CountryList.propTypes = {
  region: PropTypes.string.isRequired
};

export default CountryList;