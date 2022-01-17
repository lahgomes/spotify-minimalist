import React from 'react';

import './Card.scss';

const Card = ({ title, src, color, url }) => (
  <a href={url} target="_blank" className="card" title={title} rel="noreferrer" style={{ backgroundColor: `${color}` }}>
    <h2 className="card__title">
      { title }
    </h2>
    <img className="card__img" src={src} alt={title} />
  </a>  
);

export default Card;
