import { useState } from "react";

function GameTo100({ user, setUsers, saveUsers }) {
  if (user.num === 100) {
    user.num = Math.floor(Math.random() * 100);
  }
  const [num, setNum] = useState(user.num);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState("");
  const [myScores, setMyScores] = useState([]);
  const [average, setAverage] = useState(0);
  function cackPoint(num, targetNum, step, otherStep) {
    let minStep = 100;
    let goToUp = targetNum - num;

    let goToDoen = 100;
    let helfTarget = Math.floor(targetNum / 2);
    if (num >= helfTarget) {
      /*add 1 to pow by 2 and add 1 if it un even*/
      goToDoen = num - helfTarget + (targetNum % 2) + 1;
    }
    minStep = Math.min(Math.min(goToDoen, goToUp) + step, otherStep);
    /*add 1 to divide by 2, add 1 to pow by 2 and add 1 if un enen*/
    step += 2 + (targetNum % 2);
    if (step + 1 >= minStep) {
      return minStep;
    }
    return Math.min(
      minStep,
      cackPoint(Math.floor(num / 2), helfTarget, step, minStep)
    );
  }

  function checkWin(num) {
    if (num === 100) {
      setWon("you won!");
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

    user.averageScores = average;
    if (cackPoint(user.num, 100, 0, 100) === score) {
      user.perfectGames += 1;
    }
    user.games += 1;
    user.num = 100;
    saveUsers.forEach((currentUser, index) => {
      if (user.name === currentUser.name) {
        saveUsers[index] = user;
      }
    });
    localStorage.setItem("users", JSON.stringify(saveUsers));
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
          <p>average {average}</p>
          <p>myScores {myScores}</p>
          {won && <button onClick={newGame}>new game</button>}
          {won && <button onClick={() => quit(user)}>quit</button>}
        </>
      ) : (
        <>
          <p>myScores {myScores}</p>
          <p>average {average}</p>
          <div id="buttons">
            <button className="gameButton" onClick={() => handleClick("+")}>
              +1
            </button>
            <button className="gameButton" onClick={() => handleClick("-")}>
              -1
            </button>
            <button className="gameButton" onClick={() => handleClick("*")}>
              x2
            </button>
            <button className="gameButton" onClick={() => handleClick("/")}>
              /2
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default GameTo100;
