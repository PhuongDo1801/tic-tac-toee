export default function GameBoard({OnSelectSquare, board}) {

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => (
                            <li key={cellIndex}>
                                <button onClick={() => OnSelectSquare(rowIndex, cellIndex)}
                                    disabled={playerSymbol !== null}
                                    >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}