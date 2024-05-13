import React from 'react'
import Startgame from './components/Startgame';
import { useState } from 'react';
import './App.css';
import PlayGame from './components/PlayGame';
function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);
  return (
    <>
    {isGameStarted ? <PlayGame /> : <Startgame setIsGameStarted = {setIsGameStarted}/>}
    
    </>
  )
}

export default App