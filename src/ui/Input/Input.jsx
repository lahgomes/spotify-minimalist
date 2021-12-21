import React from 'react';
import './Input.scss';
  
const Input = ({ type = "search", placeholder }) => (
  <input 
    type={type} 
    placeholder={placeholder}
    className="search__input" 
    
  />
)

export default Input;





