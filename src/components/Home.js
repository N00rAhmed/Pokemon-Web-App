import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Tabs from './Tabs.js';
import InfoPage from './InfoPage';
import PokimonThumbnails from './PokimonThumbnails';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [allPokimons, setAllPokimons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=1007')
  // limit-28
  // limit-1007
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(['name']);
  const [searchTitle, setSearchTitle] = useState("");

  // const handleSearchChange = (e) => {
  //   setSearchTitle(e.target.value);
  // };

  const getAllPokimons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    // console.log(data)

    function createPokimonObject (result) {
      result.forEach(async (pokimon)=> {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimon.name}`);
        const data = await res.json()

        setAllPokimons(currentList => [...currentList, data])
        
      });
    }
    createPokimonObject(data.results)
    await console.log(allPokimons)
    console.log(loadMore);

  }

  useEffect(() => {
      getAllPokimons()
  }, [])

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = allPokimons[pokemonId];}
  
  return (
    <div>
          <div className='input-field'>            
            <input
            style= {{ width: "100%", height: "30px" }}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
            />
          </div>
          <Tabs />
      <div className='pokemon container'>
{/* onClick={() => navigate('/infoPage')} */}

        <div className='all-container'>


          {allPokimons.filter((value) => {
            if(searchTitle === '') {
              return value;
            } else if (value.name.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          

          .map((pokimon, index) =>
            
            <PokimonThumbnails
            id={pokimon.id}
            name={pokimon.name}
            image={pokimon.sprites.front_default}
            
            // pokimon.sprites.other.dream_world.front_default
            // pokimon.sprites.front_default
            
            type={pokimon.types[0].type.name}
            key={index}
            />
        
            // focus on sending api data from here to mongodb on click and GET data to display on collection page
            // do this step by step
            // first step is to onclick to send that data to db
            // then GET and redirect
            )}

        </div>
        <button className='load-more' onClick={() => getAllPokimons()}>Load More</button>
      </div>
    </div>
  )
}

export default Home