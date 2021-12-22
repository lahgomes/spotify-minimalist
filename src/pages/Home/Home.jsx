import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import './Home.scss';

const Home = () => (
  <>
  <Header />
  <section className='section'>
    <h1 className='section__title'> Discover your favorites songs </h1>
    <Card />
    {/* <Card />
    <Card />
    <Card /> */}
  </section>   
  </>  
);

export default Home;
