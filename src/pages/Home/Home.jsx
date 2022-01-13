import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { colorsGenerator } from '../../helpers/colorsGenerator';
import { BASE_URL, fetchApi } from '../../api/config';

import albumimg from '../../images/album.png'

import './Home.scss';

const Home = ({ token }) => {

  const [artists, setArtists] = useState([]) //pesquisar artistas
  const [albums, setAlbums] = useState([]) //pesquisar álbuns
  const [severalAlbums, setSeveralAlbums] = useState([]) //página inicial randomica artistas
  const [severalCategories, setSeveralCategories] = useState([]) //página inicial randomica categorias
  const [isLoading, setisLoading] = useState(false)

  let navigate = useNavigate() //redirecionar para a home quando o token for inválido

  useEffect(() => {
    const getAlbums = async () => {
      const { data } = await fetchApi(`${BASE_URL}/browse/new-releases`, token)
      setSeveralAlbums([...data.albums.items])
    }

    if(token) {
      getAlbums()
    }
  }, [token])

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await fetchApi(`${BASE_URL}/browse/categories`, token)
      setSeveralCategories([...data.categories.items])
    }

    if(token) {
      getCategories()
    }
  }, [token])

 
  const handleSearchArtists = async (event, searchKey) => {
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
      console.log(error)
    } finally {
      setisLoading(false)      
    }  
  }

  return (
    <>
      <main className='main'>
       <Header       
          handleSearchArtists={handleSearchArtists}
        />      

        {/* página inicial */}
        {(artists.length === 0 || albums.length === 0) && severalAlbums.length > 0 && (
          <section>
            <h2 className='main__title'>New Releases Albums</h2>
            <ul className='wrapper-category'>
              {severalAlbums.map((album) => (
                <li key={album.id}>
                  <Card 
                    title={album.name} 
                    src={album.images.length > 0 ? album.images[1].url : albumimg}
                    color={colorsGenerator()}
                    url={album.external_urls.spotify}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {(artists.length === 0 || albums.length === 0) && severalCategories.length > 0 && (
          <section>
            <h2 className='main__title'>Popular Categories</h2>
            <ul className='wrapper-category'>
              {severalCategories.map((category) => (
                <li key={category.id}>
                    <Card 
                      title={category.name} 
                      src={category.icons.length > 0 ? category.icons[0].url : albumimg}
                      color={colorsGenerator()}
                      url="#/"
                    />
                  </li>
              ))}
            </ul>
          </section>
        )}

        {isLoading && <p>Carregando</p>}

        {/* pesquisa */}
        {artists.length > 0 && (
          <section>
            <h2 className='main__title'>Artista</h2>
            <ul className='wrapper-category'>
              {artists.map((artist) => (
                <li key={artist.id}>
                  <Card 
                    title={artist.name} 
                    src={artist.images.length > 0 ? artist.images[1].url : albumimg}
                    color={colorsGenerator()} 
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
                    color={colorsGenerator()} 
                    url={album.external_urls.spotify}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main> 
    </>  
  )
};

export default Home;
