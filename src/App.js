import logo from './logo.svg';
import './App.css';
import Button from "./button.js"
import React from 'react';

function Name(){
  return (
    <a href="#">dsa</a>
  )
}


function App() {
  return (
    <>
      <Button text='버튼입니다' />
      <Name><img src={logo} /></Name>
    </>
    
    
  )
  
}

export default App;
