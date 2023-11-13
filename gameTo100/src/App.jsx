import { useState } from "react";
import "./App.css";
import GameCenter from "./components/GameCenter";
import Register from "./components/Register";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
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
