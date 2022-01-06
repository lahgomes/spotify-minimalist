import React from 'react';
import Input from '../../ui/Input/Input';
import BtnSearch from '../../ui/Button/BtnSearch';
import { MdLibraryMusic } from "react-icons/md";
import { MdHome } from "react-icons/md";

import { FaSpotify } from "react-icons/fa";

import './Header.scss';

const Header = ({ searchKey, handleSearchKey, handleSearchArtists }) => (
  <header className="header">
    <h1 className="header__title">Search</h1>
    <div className="icon-spotify">   
      <FaSpotify className="header__icon header__icon--logo"/>   
    </div>
    <form className="search" onSubmit={handleSearchArtists}>
      <Input 
        type="search"
        placeholder="Artists, songs os podcasts" 
        searchKey={searchKey}
        handleSearchKey={handleSearchKey}  
      />
      <BtnSearch type="submit" />    
    </form >
    <nav className="menu">
      <MdLibraryMusic className="header__icon" />
      <MdHome className="header__icon"/>
    </nav>  
  </header>
);

export default Header
