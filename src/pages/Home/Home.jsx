import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import './Home.scss';

const Home = ({ token }) => {

  const categories = [
    {id: 'favorites', title: 'Discover your favorites songs'},
    {id: 'podcasts', title: 'Podcasts'},
    {id: 'browse', title: 'Browse all'}
  ];

  const items = [
    {title:'The Best of Pop', url:'https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0', color:'#27856a', category:'favorites'},
    {title:'Best of 2021', url:'https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc', color:'#3d91f4', category:'favorites'},
    {title:'Classic Rock', url:'https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374', color:'#ffa42b', category:'favorites'},
    {title:'Indie', url:'https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312', color:'#f15e6c', category:'favorites'},
    {title:'The Best of Pop', url:'https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0', color:'#27856a', category:'favorites'},
    {title:'Best of 2021', url:'https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc', color:'#3d91f4', category:'favorites'},
    {title:'Classic Rock', url:'https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374', color:'#ffa42b', category:'favorites'},
    {title:'Indie', url:'https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312', color:'#f15e6c', category:'favorites'},

    {title:'Modus Operandi', url:'https://i.scdn.co/image/ab67656300005f1f58c7a48f09adfdd65127304b', color:'#1e3264', category:'podcasts'},
    {title:'Não Inviabilize', url:'https://i.scdn.co/image/9dbecec261183fa7479bf347d2cd9c9fc025ae6a', color:'#b49bc8', category:'podcasts'},
    {title:'Wanda Experimenta', url:'https://i.scdn.co/image/ab67706c0000da8409b724bc0ce12a9d25978739', color:'#f15e6c', category:'podcasts'},
    {title:'Estamos bem?', url:'https://i.scdn.co/image/ab67656300005f1feda422b90c8173a72b48947c', color:'#0d72ea', category:'podcasts'},
    {title:'Modus Operandi', url:'https://i.scdn.co/image/ab67656300005f1f58c7a48f09adfdd65127304b', color:'#1e3264', category:'podcasts'},
    {title:'Não Inviabilize', url:'https://i.scdn.co/image/9dbecec261183fa7479bf347d2cd9c9fc025ae6a', color:'#b49bc8', category:'podcasts'},
    {title:'Wanda Experimenta', url:'https://i.scdn.co/image/ab67706c0000da8409b724bc0ce12a9d25978739', color:'#f15e6c', category:'podcasts'},
    {title:'Estamos bem?', url:'https://i.scdn.co/image/ab67656300005f1feda422b90c8173a72b48947c', color:'#0d72ea', category:'podcasts'},

    {title:'The Best of Pop', url:'https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0', color:'#27856a', category:'browse'},
    {title:'Best of 2021', url:'https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc', color:'#3d91f4', category:'browse'},
    {title:'Classic Rock', url:'https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374', color:'#ffa42b', category:'browse'},
    {title:'Indie', url:'https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312', color:'#f15e6c', category:'browse'},
    {title:'The Best of Pop', url:'https://i.scdn.co/image/ab67706f00000002a418f22aabf49749111db0c0', color:'#27856a', category:'browse'},
    {title:'Best of 2021', url:'https://i.scdn.co/image/ab67706f000000023ba7e5967c8a2ba24c37e3dc', color:'#3d91f4', category:'browse'},
    {title:'Classic Rock', url:'https://i.scdn.co/image/ab67706f000000026705dfb8f5445fa4fdddf374', color:'#ffa42b', category:'browse'},
    {title:'Indie', url:'https://i.scdn.co/image/ab67616d00001e0296620e04b099b836684a3312', color:'#f15e6c', category:'browse'}    
  ];

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  const handleSearchKey = target => setSearchKey(target.value)

  const handleSearchArtists = async (event) => {
    event.preventDefault()

    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          q: searchKey,
          type: "artist"
        }
      })

      

      console.log(data)
      
    } catch (error) {
      console.log(error)
    }
    


    //setArtists(data.artists.items)
  }

  return (
    <>
      <main className='main'>
        <Header
          searchKey={searchKey}
          handleSearchKey={handleSearchKey}
          handleSearchArtists={handleSearchArtists}
        />
      </main> 

      {
        categories.map((category)=>(
          <section key={category.id}>
            <h2 className='main__title'>{category.title}</h2>
            <ul className='wrapper-category'>
              {items.filter((item) => item.category === category.id).map((item, index) => (
                <li key={index}>
                  <Card 
                    title={item.title} 
                    src={item.url} 
                    color={item.color} 
                  />
                </li>
              ))}
            </ul>
          </section>
        ))
      }      
    </>  
  )};

export default Home;
