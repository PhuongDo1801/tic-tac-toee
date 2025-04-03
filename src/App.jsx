import Player from "./components/Player"
function App() {
  return (
    <main>
      <div id='game-container'>
        <ol id="players">
          <Player playerName='Player 1' playerSymbol='X'></Player>
          <Player playerName='Player 2' playerSymbol='O'></Player>
        </ol>
        Game Board
      </div>
      Log
    </main>
  )
}

export default App
