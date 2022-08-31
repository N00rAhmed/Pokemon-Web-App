import React from 'react'
import styled from 'styled-components';
import '../styles/start.css';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom';
import App from '../App.js';
import { useNavigate } from "react-router-dom";

import pokiball from '../pokiball.png';
// import ball from '../ball.jpg';
import pixel from '../pixel.jpg';

function Start() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
      <div className='background'>
          <Button onClick={() => navigate('./Home')}>
                  Start
                  {/* <div className='ball'>
                <img src={pokiball} alt='ball' />
              </div> */}

              </Button>

              {/* <div className='ball'>
                <img src={pokiball} alt='ball' />
              </div> */}

        </div>

      </Container>
    </div>
  )
}

const Container = styled.div`
// background-color: blue;
`;

const Button = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;

// position: fixed;
left: 45%;
top:50%;


height:70px;
width:110px;
color:black;

// margin-top: 35%;

text-transform: uppercase;
letter-spacing: 1.5px;

border: 1px solid red;
border-radius: 10px;
transition: all 0.2s ease 0s;

&:hover {
  background-color: red;
  color: black;
  cursor: pointer;
}

// background-color:blue;

`

export default Start