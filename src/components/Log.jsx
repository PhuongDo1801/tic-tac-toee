export default function Log({turns}) {
    return <ol id="log">
        {turns.map((turn, index) => {
            return (
                <li key={index}>
                    <span className="player">{turn.player}</span>
                    <span className="square">{`(${turn.square.row}, ${turn.square.col})`}</span>
                </li>
            )
        })}
    </ol>
}