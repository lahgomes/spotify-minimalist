import React from 'react';
import { FaSearch } from "react-icons/fa";

import './Button.scss';

const Button = ({ type = "submmit" }) => (
  <button
    type={type}
    className="button">
    <FaSearch />
  </button>
);
 

export default Button;
