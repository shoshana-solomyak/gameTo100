function Register({ users, setUsers, saveUsers }) {
  console.log("USERS befor", users);
  class User {
    constructor(name, pasword, active) {
      this.name = name;
      this.pasword = pasword;
      this.active = active;
      this.averageScores = 0;
      this.games = 0;
      this.averagePoint = 0;
      this.points = 0;
    }
  }
  function handelRegister() {
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
      alert("add user secsecfuly");
    }
    console.log("USERS after", users);

    nameDom.value = "";
    paswordDom.value = "";
  }
  return (
    <div>
      <input id="name" type="text" placeholder="user name" />
      <br />
      <input id="pasword" type="text" placeholder="pasword" />
      <br />
      <button onClick={handelRegister}>join</button>
    </div>
  );
}
export default Register;
