import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import './Home.scss';

const Home = () => (
  <>
  <Header />
  <main className='main'>
    <h1 className='main__title'>
      Discover your favorites songs
    </h1>

    <section className="wrapper-category">
      <Card title="The Best of Pop" src="https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0" color="#27856a" />
      <Card title="Best of 2021" src="https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc" color="#3d91f4"/>
      <Card title="Classic Rock" src="https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374" color="#ffa42b" />
      <Card title="Indie" src="https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312" color="#f15e6c" />
    </section>

    <h1 className='main__title'>
      Podcasts
    </h1>
    
    <section className="wrapper-category">
      <Card title="Modus Operandi" src="https://i.scdn.co/image/ab67656300005f1f58c7a48f09adfdd65127304b" color="#1e3264" />
      <Card title="Não Inviabilize" src="https://i.scdn.co/image/9dbecec261183fa7479bf347d2cd9c9fc025ae6a" color="#b49bc8"/>
      <Card title="Wanda Experimenta" src="https://i.scdn.co/image/ab67706c0000da8409b724bc0ce12a9d25978739" color="#f15e6c"/>
      <Card title="Estamos bem?" src="https://i.scdn.co/image/ab67656300005f1feda422b90c8173a72b48947c" color="#0d72ea"/>
    </section>

    <h1 className='main__title'>
      Browse all
    </h1>

    <section className="wrapper-category">
      <Card title="The Best of Pop" src="https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0" color="#27856a" />
      <Card title="Best of 2021" src="https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc" color="#3d91f4"/>
      <Card title="Classic Rock" src="https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374" color="#ffa42b" />
      <Card title="Indie" src="https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312" color="#f15e6c" />
    </section>

  </main>   
  </>  
);

export default Home;
