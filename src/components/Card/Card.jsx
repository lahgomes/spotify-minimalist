import React from 'react';

import './Card.scss';

const Card = ({ title, src, color }) => (
  <div className="card" style={{ backgroundColor: `${color}` }}>
    <h2 className="card__title">
      { title }
    </h2>
    <img className="card__img" src={src} alt={title} />
  </div>  
);

export default Card;
