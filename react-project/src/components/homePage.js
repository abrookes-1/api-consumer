import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './card/card';

const formQueryUrl = queryParams => {
  // TODO: switch url with env variable or similar
  // const url = 'https://ll.thespacedevs.com';
  const url = 'https://lldev.thespacedevs.com'; // dev url has old data but no rate-limiting
  const endpoint = '/2.2.0/astronaut/';

  var queryString = Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');

  return(url + endpoint + '?' + queryString);
};

const HomePage = () => {
  const [astronauts, setAstronauts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const pageSize = 15;

  // Function to query the api for astronauts and add their data to state
  const getMoreItems = () => {
    var queryParams = {
      'offset': astronauts.length,
      'limit': pageSize,
      // 'ordering': ordering,
    };

    var url = formQueryUrl(queryParams);

    axios.get(url)
    .then(response => {
      // Append new astronaut list to state
      setAstronauts([...astronauts, ...response.data.results]);

      setErrorMessage('');
    })
    .catch(err => {
      console.log('Error getting Astronauts: ' + err.message);

      if (err.response) {
        setErrorMessage('Received Code ' + err.response.status + ': ' + err.response.data);
      }
    })
    .finally(() => {
      setIsLoading(false);
    });

    setIsLoading(true);
  };

  const handleScroll = event => {
    // Infinite scroll
    // if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
      getMoreItems();
    }
  };

  // Run once at start
  useEffect(() => {
    getMoreItems();
  }, []);

  return (
    <div className='homePage'>
      <div className='errorMessage'>
        {errorMessage == '' ? null : errorMessage}
      </div>
      <div className='cardsPanel' onScroll={handleScroll}>
      {
        astronauts.map((target, index) => {return(
          <Card content={target} key={index}/>
        )})
      }
      <div className='loadingMessage'>
        {isLoading ? <p>Loading Astronauts...</p> : <p/>}
      </div>
      
      </div>
    </div>
  );
};

export default HomePage;
