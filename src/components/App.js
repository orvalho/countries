import React, {useState} from 'react';

import FlagList from './FlagList';
import Button from './Button';
import CountryList from './CountryList';

export default() => {
  const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  const defaultRegion = 'europe';
  const [region, setRegion] = useState(defaultRegion);
  return (<div className="ui container">
    <FlagList/>
    <div className="ui center aligned teal segment">
      {regions.map(item => <Button key={item} buttonText={item} region={region} setRegion={setRegion}/>)}
    </div>
    <CountryList region={`region/${region}`}/>
  </div>);
};
