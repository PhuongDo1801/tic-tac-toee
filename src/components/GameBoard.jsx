import { useState } from "react"
const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]   
]

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initGameBoard)
    function handleClick(rowIndex, cellIndex) {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(row => [...row])]
            newGameBoard[rowIndex][cellIndex] = 'X'
            return newGameBoard
        })
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => handleClick(rowIndex, cellIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}