import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import PokimonThumbnails from './PokimonThumbnails';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [allPokimons, setAllPokimons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=1007')
  // const [q, setQ] = useState("");
  // const [searchParam] = useState(['name']);
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const getAllPokimons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    // console.log(data)

    function createPokimonObject (result) {
      result.forEach(async (pokimon)=> {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimon.name}`)
        const data = await res.json()
        
        setAllPokimons(currentList => [...currentList, data])
        
      });
    }
    createPokimonObject(data.results)
    await console.log(allPokimons)

  }

  useEffect(() => {
      getAllPokimons()
  }, [])

  
  return (
    <div>

      <div className='pokemon container'>

        <div className='all-container'>
          <div className='input-field'>            
            <input
            style= {{ width: "100%", height: "30px" }}
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTitle(e.target.value)}
            />

          </div>
          
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
            image={pokimon.sprites.other.dream_world.front_default}
            type={pokimon.types[0].type.name}
            key={index}
            />
            )}

        </div>
        <button className='load-more' onClick={() => getAllPokimons()}>Load More</button>
      </div>
    </div>
  )
}

export default Home