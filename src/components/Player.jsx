import { useState } from "react"
export default function Player({ playerName, playerSymbol, isActive, onChangeName }) {
  const [fitstname, setName] = useState(playerName);
  const [edit, setEdit] = useState(false);
  let name = <span className="player-name">{fitstname}</span>;
  let symbol = <span className="player-symbol">{playerSymbol}</span>;
  function handleChangeName(event) {
    setName(event.target.value);

  }
  if (edit) {
    name = <input type="text" value={fitstname} onChange={handleChangeName}/>;
  }
  function handleEdit() {
    setEdit((editing) => !editing);
    if(edit){
      onChangeName(playerSymbol, fitstname);
    }
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {name}
        {symbol}  
      </span>
      <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
    </li>
  );
}
