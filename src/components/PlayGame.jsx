import React, { useState } from 'react'
import Box from './Box';
import RollDice from './RollDice';
import Rules from './Rules';
function PlayGame() {
    const [ clickedVal, setClickedVal ] = useState();
    const [score, setScore] = useState(0);
    const [error,setError] = useState('');
    const [rules, setRules] = useState(false);
    const a = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <div className="play-container">
                <div className='upper'>
                    <div className="score">
                        <h2>{score}</h2>
                        <p>Total Score</p>
                    </div>
                    <div className='number'>
                        <span className='error-txt'>{error}</span>
                    <div className="boxes">
                        {a.map((boxNum, idx) => {
                            return (
                                <Box key={idx} idx={idx} value={boxNum} isClicked={boxNum == clickedVal} clickedVal={clickedVal} setClickedVal={setClickedVal} setError={setError}/>
                            )
                        })}
                    </div>
                    <p>Select Number</p>
                    </div>
                    
                </div>
                <RollDice clickedVal={clickedVal} setScore={setScore} setClickedVal={setClickedVal} setError={setError} setRules={setRules}/>

                {rules ? <Rules /> : undefined}
            </div>

        </>
    )
}

export default PlayGame