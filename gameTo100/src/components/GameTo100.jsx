import { useState } from "react";

function GameTo100({ user, setUsers }) {
  const [num, setNum] = useState(Math.floor(Math.random() * 100));
  const [score, setScore] = useState(0);
  const [won, setWon] = useState("");
  const [myScores, setMyScores] = useState([]);
  const [average, setAverage] = useState(0);
  function checkWin(num) {
    if (num === 100) {
      setWon("you won!");
      //   setMyScores((prevScores) => {
      //     setAverage(() => {
      //       let count = 0;
      //       myScores.forEach((s) => (count += s));
      //       return myScores.length ? count / myScores.length : count;
      //     });
      //     return [...prevScores, score + 1];
      //   });
      setMyScores((prevScores) => {
        const newScores = [...prevScores, score + 1];
        setAverage(
          Math.floor(
            newScores.reduce((acc, score) => acc + score, 0) / newScores.length
          )
        );
        return newScores;
      });
      return true;
    }
  }

  function nextTurn() {
    setUsers((prev) => {
      const copyUsers = [...prev];
      let i = 0;
      copyUsers.map((currentUser, index) => {
        if (currentUser.active) {
          currentUser.active = false;
          i = index + 1;
        }
        return currentUser;
      });
      if (i === copyUsers.length) {
        i = 0;
      }
      copyUsers[i].active = true;
      return copyUsers;
    });
  }

  function newGame() {
    setScore(0);
    setWon("");
    setNum(Math.floor(Math.random() * 100));
  }

  function quit(user) {
    if (user.active) {
      nextTurn();
    }
    setUsers((prevUsers) => {
      const filteredUsers = prevUsers.filter((u) => u.name !== user.name);
      return filteredUsers;
    });
  }
  function handleClick(action) {
    if (user.active === false) {
      return;
    }
    let newNum;
    if (action === "+") {
      newNum = num + 1;
    } else if (action === "-") {
      newNum = num - 1;
    } else if (action === "*") {
      newNum = num * 2;
    } else if (action === "/") {
      newNum = Math.floor(num / 2);
    }
    checkWin(newNum);
    setScore(score + 1);
    setNum(newNum);
    nextTurn();
  }

  return (
    <div
      className="game"
      style={{ backgroundColor: user.active ? "darksalmon" : "grey" }}
    >
      {user.name}
      <br></br>
      {num}
      <p>score : {score}</p>
      {won ? (
        <>
          {num === 100 && "you won!"}
          <br></br>
          {won && <button onClick={newGame}>new game</button>}
          {won && <button onClick={() => quit(user)}>quit</button>}
        </>
      ) : (
        <>
          <div id="buttons">
            <button onClick={() => handleClick("+")}>+1</button>
            <button onClick={() => handleClick("-")}>-1</button>
            <button onClick={() => handleClick("*")}>x2</button>
            <button onClick={() => handleClick("/")}>/2</button>
          </div>
        </>
      )}
    </div>
  );
}
export default GameTo100;
