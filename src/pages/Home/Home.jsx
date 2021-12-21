import React from 'react';
import Input from '../../ui/Input/Input';
import BtnSearch from '../../ui/Button/BtnSearch';

import './Home.scss';

const Home = () => (
  <div className="home">  
    <h1 className="title">Search</h1>
    <form className="search">
      <Input 
      type="search"
      placeholder="Artists, songs os podcasts"   
      />
      <BtnSearch type="submit" />    
    </form>
  </div>

);

export default Home;
