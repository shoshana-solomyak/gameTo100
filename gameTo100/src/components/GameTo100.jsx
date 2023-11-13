import { useState } from "react";

function GameTo100() {
  const [num, setNum] = useState(Math.floor(Math.random() * 100));
  const [score, setScore] = useState(0);
  const [won, setWon] = useState("");
  function checkWin(num) {
    if (num === 100) {
      setWon("you won!");
      return true;
    }
    return false;
  }
  function newGame() {
    setScore(0);
    setWon("");
    setNum(Math.floor(Math.random() * 100));
  }
  function handleClick(action) {
    let newNum;
    if (action === "+") {
      newNum = num + 1;
    } else if (action === "-") {
      newNum = num - 1;
    } else if (action === "*") {
      newNum = num * 2;
    } else if (action === "/") {
      newNum = num / 2;
    }
    checkWin(newNum);
    setScore(score + 1);
    setNum(newNum);
  }
  return (
    <div className="game">
      {num}
      <p>score : {score}</p>
      <div id="buttons">
        <button onClick={() => handleClick("+")}>+1</button>
        <button onClick={() => handleClick("-")}>-1</button>
        <button onClick={() => handleClick("*")}>x2</button>
        <button onClick={() => handleClick("/")}>/2</button>
      </div>
      {won && <p>{won}</p>}
      {won && <button onClick={newGame}>new game</button>}
      {}
    </div>
  );
}
export default GameTo100;
