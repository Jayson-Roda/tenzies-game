import React from 'react'
export default function Player(props) {

    function nameChange(event){
        props.setPlayerName(event.target.value)
    }
  
    return (
        <div className="home--container">
            <h1 className='home--title'>
                Welcome 
                <br />to 
                <br />Tenzies Game
            </h1>
            <p className="home--instructions"><b>Instructions:</b> <br />Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <input
                className='player--name'
                type="text"
                placeholder="Player Name"
                name="player"
                onChange={nameChange}
            />
            <br />
            <br />
            <button onClick={props.startGame} className='start-game-btn'>Start Game</button>
        </div>
    )
}