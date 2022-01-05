import React from 'react';
import './Input.scss';
  
const Input = ({ type = "search", placeholder, searchKey, handleSearchKey }) => (
  <input 
    type={type} 
    placeholder={placeholder}
    className="search__input" 
    value={searchKey} 
    onChange={({ target }) => handleSearchKey(target)}   
  />
)

export default Input;
