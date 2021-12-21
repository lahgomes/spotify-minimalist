import React from 'react';
import { FaSearch } from "react-icons/fa";

import './BtnSearch.scss';

const BtnSearch = ({ type = "submmit" }) => (
  <button
    type={type}
    className="search__btn">
    <FaSearch />
  </button>
);
 

export default BtnSearch
