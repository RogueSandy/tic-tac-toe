import { useEffect, useState } from 'react';
import { Board } from './components/Board'
import Score from './components/Score';
import Reset from './components/Reset';
import Modal from './components/Modal';

function App() {
  const WinCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = useState(true)
  const [score, setScore] = useState({xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(null)

  const handleBoxClick = (idx) => {
    const updatedBoard = board.map((value, i) => {
      if( i === idx ) {
        return xPlaying ? "X" : "O"
      } else {
        return value
      }
    })

    setWinner(checkWinner(updatedBoard))
    setBoard(updatedBoard)
    setXPlaying(!xPlaying)
  }

  useEffect(() => {
    if ( winner ) {
      if (winner === "O"){
       let {oScore} = score
       oScore += 1
       setScore({...score, oScore})
      } else {
        let {xScore} = score
        xScore += 1
        setScore({...score, xScore})
      }
    }
  }, [winner])

  const checkWinner = (board) => {
    for(let i = 0; i < WinCondition.length; i++){
      const [x,y,z] = WinCondition[i]

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
    setWinner(null)
  }

  return (
    <div className="App">
      {gameOver && <Modal winner={winner} resetBoard={resetBoard} />}
      <Score score={score} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <Reset resetBoard={resetBoard} />
    </div>
  );
}

export default App;
