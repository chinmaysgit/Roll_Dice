import React from 'react'

function Box({idx, value,setClickedVal, isClicked,setError}) {
  return (
    <>
    <div className="box" key={idx} onClick={() => {
        setClickedVal(value);
        setError('');
    }} style={{backgroundColor: (isClicked ? "black" : "white"), color: (isClicked ? "white" : "black")}}>{value}</div>
    </>
  )
}

export default Box