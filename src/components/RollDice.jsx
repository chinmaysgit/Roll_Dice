import React, { useEffect, useState } from 'react'

function RollDice({clickedVal, setScore,setClickedVal,setError,setRules}) {
    const [changeImg, setChangeImg] = useState(1);
    
    function changeImage(){
        if(!clickedVal){
            setError("You have not selected any number")
            return;
        }
        let random = Math.floor(Math.random() * 7);

        if(random > 0)
        setChangeImg(random);
    else
        setChangeImg(1);
    }
    useEffect(() => {
        if(clickedVal == changeImg){
            setScore(pre => pre+changeImg)
        }else{
            setScore(0);
        }
        setClickedVal(undefined)
    },[changeImg])

  return (
    <>
    <div className="dice-container">
        <div onClick={changeImage}>
            <img src={`/images/dice/dice_${changeImg}.png`} alt="" />
        </div>
        <p className='dice-text'>Click on Dice to roll</p>
        <div className='btns'>
            <button className='btn bg-white' onClick={() => setScore(0)}>
                Reset Score
            </button>
            <button className='btn bg-black' onClick={() => setRules(pre => !pre)}>
                Show Rules
            </button>
        </div>
    </div>
    </>
  )
}

export default RollDice