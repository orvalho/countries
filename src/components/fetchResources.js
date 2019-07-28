import {useState, useEffect} from 'react';
import axios from 'axios';

export default endpoint => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async endpoint => {
      const response = await axios.get(`https://restcountries.eu/rest/v2/${endpoint}`);
      setCountries(response.data);
    })(endpoint)
  }, [endpoint]);

  return countries;
};
