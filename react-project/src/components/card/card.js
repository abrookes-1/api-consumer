import React, { useState, useEffect } from 'react';

import './card.css';
import { ActionButton } from '../misc_components/miscComponents';

const Card = props => {
  const [expanded, setExpanded] = useState(false);

  const cardOnClick = event => {
    setExpanded(!expanded);
  }

  return(
    <div className='card' onClick={cardOnClick}>
      <div className='radialBar'>
        <img
          src={props.content.profile_image_thumbnail}
          width='80'
          height='80'
          style={{borderRadius: '15px'}}
        />
        {props.content.name}
      </div>
      {
        expanded? (
          <ExpandedCard content={props.content} />
        ): (
          <CompactCard content={props.content} />
        )
      }
      <div className='cardButton' onClick={e =>e.stopPropagation()}>
        <ActionButton
          text='Wiki'
          href={props.content.wiki}
        />
      </div>
    </div>
  );
};

const CompactCard = props => {
  return(
    <div className='compactCard'>
      <div className='detail'>
        <table>  
          <tr>
            <td className='alignRight'><b>Age</b></td>
            <td className='alignLeft'>{props.content.age}</td>
          </tr>
          <tr>
            <td className='alignRight'><b>Nationality</b></td>
            <td className='alignLeft'>{props.content.nationality}</td>
          </tr>
          <tr>
            <td className='alignRight'><b>Agency</b></td>
            <td className='alignLeft'>{props.content.agency.abbrev}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const ExpandedCard = props => {
  return(
    <div className='expandedCard'>
      <div className='detail'>
        {props.content.bio}
      </div>
    </div>
  );
};

export default Card;
  