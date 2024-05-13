import React, { useState } from 'react'

function PlayGame() {
    // const [ clickedVal, setClickedVal ] = useState();
    const a = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <div className="play-container">
                <div className='upper'>
                    <div className="score">
                        <h2>0</h2>
                        <p>Total Score</p>
                    </div>
                    <div className='number'>
                    <div className="boxes">
                        {a.map((boxNum, idx) => {
                            return (
                                <div className="box" key={idx}>{boxNum}</div>
                            )
                        })}
                    </div>
                    <p>Select Number</p>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default PlayGame