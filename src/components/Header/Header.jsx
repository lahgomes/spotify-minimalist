import React, { useState } from 'react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { MdLibraryMusic } from "react-icons/md";
import { MdHome } from "react-icons/md";

import { FaSpotify } from "react-icons/fa";

import './Header.scss';

const Header = ({ handleSearchArtists }) => {
  const [searchKey, setSearchKey] = useState("")

  const handleSearchKey = target => setSearchKey(target.value)

  return (
    <header className="header">
      <h1 className="header__title">Search</h1>
      <div className="icon-spotify">   
        <FaSpotify className="header__icon header__icon--logo"/>   
      </div>
      <form className="search" onSubmit={(event) => handleSearchArtists(event, searchKey)}>
        <Input 
          type="search"
          placeholder="Artists, songs os podcasts" 
          searchKey={searchKey}
          handleSearchKey={handleSearchKey}  
        />
        <Button type="submit" />    
      </form >
      <nav className="menu">
        <MdLibraryMusic className="header__icon" />
        <MdHome className="header__icon"/>
      </nav>  
    </header>
  );
}

export default Header
