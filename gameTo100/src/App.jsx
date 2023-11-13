import { useState } from "react";
import "./App.css";
import GameCenter from "./components/GameCenter";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Register users={users} setUsers={setUsers} />
      <GameCenter users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
