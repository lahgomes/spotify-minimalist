import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { geraHexadecimal } from '../../helpers/utils';
import { BASE_URL, fetchApi } from '../../api/config';

import albumimg from '../../images/album.png'

import './Home.scss';

const Home = ({ token }) => {

  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [severalAlbums, setSeveralAlbums] = useState([])
  const [severalCategories, setSeveralCategories] = useState([])
  const [isLoading, setisLoading] = useState(false)

  let navigate = useNavigate() //hook para redirecionar para a home quando o token for invalido

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await fetchApi(`${BASE_URL}/browse/new-releases`, token)
      setSeveralAlbums(data.albums.items)
    }

    if(token) {
      getAlbums()
    }
  }, [token])

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await fetchApi(`${BASE_URL}/browse/categories`, token)
      setSeveralCategories(data.categories.items)
    }

    if(token) {
      getCategories()
    }
  }, [token])

  const handleSearchKey = target => setSearchKey(target.value)

  const handleSearchArtists = async (event) => {
    event.preventDefault()

    
    try {
      setisLoading(true)

      const { data, response } = await fetchApi(`${BASE_URL}/search?q=${searchKey}&type=artist,album`, token)

      if(response.status === 401) {
        localStorage.removeItem('token')
        navigate('/')
        return
      }

      setArtists(data.artists.items)    
      setAlbums(data.albums.items)
      
    } catch (error) {
      //console.log(error)
    } finally {
      setisLoading(false)
      setSearchKey('')
    }  
  }

  return (
    <>
      <main className='main'>
        <Header
          searchKey={searchKey}
          handleSearchKey={handleSearchKey}
          handleSearchArtists={handleSearchArtists}
        />

        {(artists.length === 0 || albums.length === 0) && severalAlbums.length > 0 && (
          <section>
            <h2 className='main__title'>New Releases Albums</h2>
            <ul className='wrapper-category'>
              {severalAlbums.map((album) => (
                <li key={album.id}>
                  <Card 
                    title={album.name} 
                    src={album.images.length > 0 ? album.images[1].url : albumimg}
                    color={geraHexadecimal()}
                    url={album.external_urls.spotify}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {(artists.length === 0 || albums.length === 0) && severalCategories.length > 0 && (
          <section>
            <h2 className='main__title'>Categorias mais pesquisadas</h2>
            <ul className='wrapper-category'>
              {severalCategories.map((category) => (
                <li key={category.id}>
                    <Card 
                      title={category.name} 
                      src={category.icons.length > 0 ? category.icons[0].url : albumimg}
                      color={geraHexadecimal()}
                      url="#/"
                    />
                  </li>
              ))}
            </ul>
          </section>
        )}

        {isLoading && <p>Carregando</p>}

        {artists.length > 0 && (
          <section>
            <h2 className='main__title'>Artista</h2>
            <ul className='wrapper-category'>
              {artists.map((artist) => (
                <li key={artist.id}>
                  <Card 
                    title={artist.name} 
                    src={artist.images.length > 0 ? artist.images[1].url : albumimg}
                    color={geraHexadecimal()} 
                    url={artist.external_urls.spotify}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {albums.length > 0 && (
          <section>
            <h2 className='main__title'>Álbuns</h2>
            <ul className='wrapper-category'>
              {albums.map((album) => (
                <li key={album.id}>
                  <Card 
                    title={album.name} 
                    src={album.images.length > 0 ? album.images[1].url : albumimg}
                    color={geraHexadecimal()} 
                    url={album.external_urls.spotify}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}     
      </main> 
    </>  
  )};

export default Home;
