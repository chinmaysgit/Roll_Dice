import React from 'react'

function Startgame({setIsGameStarted}) {
 
  function handleclick(){
    setIsGameStarted(true);
  }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="image">
            <img src="/images/dices.png" alt="" />
          </div>
          <div className="info">
            <h2>dice game</h2>
            <button onClick={handleclick}>Play Now</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Startgame