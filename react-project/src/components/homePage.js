import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './card';

const formQueryUrl = page => {
  const pageSize = 10;
  const url = 'https://api.arcsecond.io';
  const endpoint = '/archives/Gemini/data';

  page += 1; // arcsecond api indexes start at 1

  return(
    url + endpoint
    + '?' + 'page=' + page
    + '&' + 'page_size=' + pageSize
  );
};

const HomePage = props => {
  const [targets, setTargets] = useState([]);
  const [lastPage, setLastPage] = useState(0);

  // On start, get targets from Arcsecond API
  useEffect(() => {
    var url = formQueryUrl(lastPage);

    axios.get(url)
    .then(response => {
      setTargets([...targets, ...response.data.results]);
    });
  }, []);

  return (
    <>
    {
      targets.map(target => {return(
        <Card content={{body: target.target_name}}/>
      )})
    }
    </>
  );
};

export default HomePage;
