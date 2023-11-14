import { useState } from "react";
import Register from "./Register";
function Login({ goToSignup, users, setUsers, saveUsers }) {
  console.log("saveUsers: ", saveUsers);
  const [loggedIn, setLoggedIn] = useState(false);
  class User {
    constructor(name, pasword, active) {
      this.name = name;
      this.pasword = pasword;
      this.active = active;
    }
  }
  function handleLogin() {
    const nameDom = document.getElementById("name");
    const paswordDom = document.getElementById("pasword");
    const name = nameDom.value;
    const pasword = paswordDom.value;
    if (name === "" || pasword === "") {
      alert("fill all");
      return;
    }
    const isExist = saveUsers.filter((user) => user.name === nameDom.value);
    if (isExist[0]) {
      alert("the user name alredy exist");
    } else {
      const copyUsers = [...users];
      let active = false;
      if (copyUsers.length === 0) {
        active = true;
      }
      const newUser = new User(name, pasword, active);
      copyUsers.push(newUser);
      saveUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(saveUsers));
      setUsers(copyUsers);
      alert("logged in");
    }

    console.log("USERS after", users);
    checkLogin();
    nameDom.value = "";
    paswordDom.value = "";
  }
  return (
    <div>
      <h2>Login</h2>
      <input id="name" type="text" placeholder="user name" />
      <br />
      <input id="pasword" type="text" placeholder="pasword" />
      <br />
      <button onClick={handleLogin}>join</button>
      <p>
        {" "}
        or <button onClick={goToSignup}>sign up</button>
      </p>
    </div>
  );
}
export default Login;
