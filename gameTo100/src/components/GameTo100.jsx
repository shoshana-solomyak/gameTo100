import { useState } from "react";

function GameTo100({ user, users, setusers }) {
  const [num, setNum] = useState(Math.floor(Math.random() * 100));
  const [score, setScore] = useState(0);
  const [won, setWon] = useState("");
  function checkWin(num) {
    if (num === 100) {
      setWon("you won!");
      return true;
    }
  }
  function newGame() {
    setScore(0);
    setWon("");
    setNum(Math.floor(Math.random() * 100));
  }
  function nextTurn() {
    setusers((prev) => {
      const copyUsers = [...prev];
      const curentUser = copyUsers.shift();
      copyUsers.push(curentUser);
      return copyUsers;
    });
  }

  return (
    <div className="game">
      name: {user.name}
      {num}
      <p>score : {score}</p>
      <div id="buttons">
        <button
          onClick={() => {
            setNum(num + 1);
            setScore(score + 1);
            checkWin(num + 1);
            nextTurn();
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setNum(num - 1);
            setScore(score + 1);
            checkWin(num - 1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setNum(num * 2);
            setScore(score + 1);
            checkWin(num * 2);
          }}
        >
          x2
        </button>
        <button
          onClick={() => {
            setNum(Math.floor(num / 2));
            setScore(score + 1);
            checkWin(Math.floor(num / 2));
          }}
        >
          :2
        </button>
      </div>
      {won && <p>{won}</p>}
      {won && <button onClick={newGame}>new game</button>}
      {}
    </div>
  );
}
export default GameTo100;
