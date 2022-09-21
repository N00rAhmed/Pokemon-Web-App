import React from 'react'
import styled from 'styled-components';
import '../styles/start.css';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom';
import App from '../App.js';
import { useNavigate } from "react-router-dom";
import Pikachu from '../Pikachu.gif';
import pokiball from '../pokiball.png';
// import ball from '../ball.jpg';
import pixel from '../pixel.jpg';
import InfoPage from './InfoPage.js'
// import { auth, signInWithGoogle } from './firebase';

// CREATE USER AUTH FUNCTIONALITY USING FIREBASE

function Start(props) {

  const navigate = useNavigate();
  
  return (
    <div>
      <Container>
      <div className='background'>
        <Gif><img src={Pikachu} alt='a' /></Gif>
        <Button onClick={() => navigate('./Home')}>
            Start
          </Button>

        </div>

      </Container>
    </div>
  )
}

const Container = styled.div`
// background-color: blue;
`;

const Gif = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top:376px;
// margin-left:60px;
margin-right:20px;
// background-color:blue;

@media screen and (max-width: 850px) {
  img{
    width:200px;
    // width:150px;
    padding-left:0px;
    margin-left:60px;
    // background-color:white;
  }
}

// max-width: 480px

// @media screen and (min-width: 850px) {
//   img{
//     width:250px;
//   }
// }
`

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