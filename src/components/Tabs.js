import React from 'react'
import styled from 'styled-components'
import '../styles/tabs.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { RiHome4Line } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
function Tabs() {
  const navigate = useNavigate();
  return (
    <div>
        <div className='cunt'>
          <div className='border'>
            <a onClick={() => navigate('/')}>
              <RiHome4Line style={{ height: "50px", width: "80px"}}/>
            </a>
            <a onClick={() => navigate('/Home')}>
            <SearchIcon style={{ height: "50px", width: "80px"}}/>
            </a>
            <a onClick={() => navigate('/Fight')}>
              <SportsMmaIcon style={{ height: "50px", width: "80px"}} />
            </a>
            <a onClick={() => navigate('/Profile')}>
              <BsPerson style={{ height: "50px", width: "80px"}}/>
            </a>
          </div>
        </div>
    </div>
  )
}



export default Tabs