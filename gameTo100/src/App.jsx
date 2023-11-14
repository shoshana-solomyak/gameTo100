import { useState } from "react";
import "./App.css";
import GameCenter from "./components/GameCenter";
import Register from "./components/Register";
import UserList from "./components/UserList";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  function goToSignup() {
    setIsLogin(false);
  }

  function goToLogin() {
    setIsLogin(true);
  }

  let saveUsers = JSON.parse(localStorage.getItem("users")) || [];

  const [users, setUsers] = useState([]);

  const [inGame, setInGame] = useState(false);
  return (
    <>
      {inGame ? (
        <GameCenter users={users} setUsers={setUsers} />
      ) : (
        <>
          {isLogin ? (
            <Login
              goToSignup={goToSignup}
              users={users}
              setUsers={setUsers}
              saveUsers={saveUsers}
            />
          ) : (
            <Register
              goToLogin={goToLogin}
              users={users}
              setUsers={setUsers}
              saveUsers={saveUsers}
            />
          )}

          <UserList setInGame={setInGame} users={users} />
        </>
      )}
    </>
  );
}

export default App;
