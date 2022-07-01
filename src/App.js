
import React, { useState, useEffect} from 'react';
import './App.css';
import Dice from './components/Dice';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Navbar  from './components/Navbar';
import Timer from './components/Timer'
import Player from './components/Home';

function App() {


  const [start, setStart] = useState(false)
  const [dice, setDice] = useState(allNewDice())
  const [timerId, setTimerId] = useState(0)
  const [tenzies, setTenzies] = useState(false)
  const [roll, setRoll] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [player, setPlayer] = useState("")
  const [highestScore, setHighestScore] = useState(
      () => JSON.parse(localStorage.getItem("highestScore")) || []
    )

  function setPlayerName(value) {
    setPlayer(value)
  }

  function gettingHighestScore(){
    const highest = {
      player: player,
      minutes: minutes,
      seconds: seconds,
      roll: roll
    }

    if(highestScore.length === 0){
      setHighestScore([highest])   
    } else {
      if(highestScore[0].minutes > minutes){
        setHighestScore([highest])
      } else if (highestScore[0].minutes === minutes) {
        if(highestScore[0].seconds > seconds){
          setHighestScore([highest])
        }
      }
    }
  }

  useEffect(() => {
    localStorage.setItem("highestScore", JSON.stringify(highestScore))
  }, [highestScore])

  useEffect(() => {
    const allHeld = dice.every(dice => dice.isHeld)
    const firstValue = dice[0].value
    const sameValue = dice.every(dice => dice.value === firstValue)
    if(allHeld && sameValue){
      setTenzies(true)
      gettingHighestScore()
      stopTimer()
    }
    // eslint-disable-next-line
  }, [dice])

  // eslint-disable-next-line
  useEffect(() => {
    if(seconds === 59){
      setMinutes(minutes + 1)
      setSeconds(0)
    }
  })

  function startTimer(){
    setTimerId(setInterval(()=>{
      setSeconds(prevSec => prevSec + 1)
    }, 1000))
  }

  function stopTimer(){    
    clearInterval(timerId)
  }

  function resetTimer(){
    if(seconds){
      setSeconds(0)
      setMinutes(0)
    }
  }

  function getNewDice(){
    return({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    })
  }

  function allNewDice(){
    const newDice = []
    for (let i=0; i < 10; i++){
      newDice.push(
        getNewDice()
      )
    }
    return newDice
  }

  function rollNewDice(){
    if(tenzies){
      setTenzies(false)
      setDice(allNewDice())
      setRoll(0)
      resetTimer()
      startTimer()
    } else {
      setRoll(prevRoll => prevRoll += 1)
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ?
        die : getNewDice()
      }))
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
  }))
}

  const diceElements = dice.map(die => {
    return <Dice 
      key={die.id}
      value={die.value} 
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  })

  function startGame(){
    setStart(true)
    startTimer()
  }

  return (
    <main>
      {start ? 
        <>
          {tenzies && <Confetti />}

          <Navbar highestScore={highestScore}/>

          <h1 className="title">Tenzies</h1>
          
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its current 
            value between rolls.
          </p>
          
          <div className='player-info'>
            <div className='player-info-item'>
              Player Name: <b>{player ? player : setPlayer("Guess")}</b>
            </div>
            <Timer 
              minutes={minutes}
              seconds={seconds}
            />
            <div className='player-info-item'>
              Number of Rolls: <b>{roll}</b>
            </div>
          </div>

          
          <div className="dice-container">
            {diceElements}
          </div>

          <button 
            className='roll-button' 
            onClick={rollNewDice}
          >
            { tenzies ? "New Game" : "Roll" }
          </button>
        </>
        : 
        <Player 
          startGame={startGame} 
          setPlayerName={setPlayerName}
          player={player}
        />
      }
    </main>
  );
}
export default App;
