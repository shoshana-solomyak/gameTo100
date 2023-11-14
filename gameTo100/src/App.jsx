import { useState } from "react";
import "./App.css";
import GameCenter from "./components/GameCenter";
import Register from "./components/Register";
import UserList from "./components/UserList";

function App() {
  let saveUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [users, setUsers] = useState(saveUsers);

  const [inGame, setInGame] = useState(false);
  return (
    <>
      {inGame ? (
        <GameCenter users={users} setUsers={setUsers} />
      ) : (
        <>
          <Register users={users} setUsers={setUsers} />{" "}
          <UserList setInGame={setInGame} users={users} />
        </>
      )}
    </>
  );
}

export default App;
