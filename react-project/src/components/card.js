import React, { useState, useEffect } from 'react';

const Card = props => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return(
    <div className='card' onClick={toggleExpanded}>
      {
        expanded? (
          <ExpandedCard content={props.content} />
        ): (
          <CompactCard content={props.content} />
        )
      }
    </div>
  );
};

const CompactCard = props => {
  return(
    <div className='compactCard'>
      <div className='radialBar'>
        {props.content.target_name}
      </div>
      <div className='detail'>
        <span>{props.content.coordinates.right_ascension}</span>
      </div>
    </div>
  );
};

const ExpandedCard = props => {
  return(
    <div className='expandedCard'>
      <div className='radialBar'>
        {props.content.target_name}
      </div>
      <div className='detail'>
        <span>{props.content.coordinates.right_ascension}</span>
        <span>{props.content.coordinates.declination}</span>
        <span>{props.content.coordinates.epoch}</span>
      </div>
    </div>
  );
};

export default Card;
  