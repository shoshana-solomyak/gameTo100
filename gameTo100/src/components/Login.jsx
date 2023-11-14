import { useState } from "react";
import Register from "./Register";
function Login({ goToSignup, users, setUsers, saveUsers }) {
  console.log("saveUsers: ", saveUsers);
  //   const [loggedIn, setLoggedIn] = useState(false);
  //   class User {
  //     constructor(name, pasword, active) {
  //       this.name = name;
  //       this.pasword = pasword;
  //       this.active = active;
  //     }
  //   }
  function handleLogin() {
    const nameDom = document.getElementById("name");
    const paswordDom = document.getElementById("pasword");
    const name = nameDom.value;
    const pasword = paswordDom.value;
    let loggedIn = false;
    if (name === "" || pasword === "") {
      alert("fill all");
      return;
    }
    let joiningUser = {};
    //   let usersArr = JSON.parse(localStorage.getItem("users"));
    saveUsers.forEach((user) => {
      if (user.name === name && user.pasword === pasword) {
        joiningUser = { ...user };
        /*if in the game*/
        const isExist = users.filter((user) => user.name === nameDom.value);
        if (isExist[0]) {
          console.log("you already in the game");
          loggedIn = false;
        } else {
          console.log("logged in");
          loggedIn = true;
        }
      }
    });
    if (!loggedIn) {
      console.log("incorrect");
      alert("Incorrect username or password");
      return;
    }
    if (users.length >= 1) {
      joiningUser.active = false;
    } else {
      joiningUser.active = true;
    }
    setUsers((prev) => [...prev, joiningUser]);
    // const copyUsers = [...users];
    // let active = false;
    // if (copyUsers.length === 0) {
    //   active = true;
    //   alert("logged in");
    // }
    // const newUser = new User(name, pasword, active);
    // copyUsers.push(newUser);
    // saveUsers.push(newUser);
    // localStorage.setItem("users", JSON.stringify(saveUsers));
    // setUsers(copyUsers);

    // console.log("USERS after", users);

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
