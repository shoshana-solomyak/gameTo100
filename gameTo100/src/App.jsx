import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Register users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
