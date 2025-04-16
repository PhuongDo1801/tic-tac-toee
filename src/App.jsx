import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import Player from "./components/Player"
import { useState } from "react";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning";

function deriveActvePlayer(prevTurns) {
  let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
  return currentPlayer;
}
const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]   
]


function App() {
  const [playerName, setPlayerName] = useState({
    X : 'Player 1',
    O : 'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActvePlayer(gameTurns);
  //const [activePlayer, setActvePlayer] = useState('X');
  //const [hasWon, setHasWon] = useState(false);
  let gameBoard = [...initGameBoard.map((row) => [...row])];
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
  let winner = null;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];
    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = playerName[firstSquare];
    }

  }
  const hasDraw = gameTurns.length === 9 && !winner;
  
  function handleSelectSquare(rowIndex, colIndex){
    //setActvePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActvePlayer(prevTurns);
      const updatedTurns = [
        {
          square: {row: rowIndex, col: colIndex},
          player: currentPlayer, 
        },
        ...prevTurns
      ];
      return updatedTurns;
    });
  }
  function handleChangeName(symbol, newName){
    setPlayerName((prevNames) => {
      return {
        ...prevNames,
        [symbol]: newName
      }
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id="players" className="highlight-player">
          <Player playerName='Player 1' playerSymbol='X' isActive={activePlayer === 'X'} onChangeName={handleChangeName}></Player>
          <Player playerName='Player 2' playerSymbol='O' isActive={activePlayer === 'O'} onChangeName={handleChangeName}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={() => {setGameTurns([])}}/>}
        <GameBoard OnSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
