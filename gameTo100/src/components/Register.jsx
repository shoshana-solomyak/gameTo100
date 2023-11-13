function Register({ users, setUsers }) {
  console.log("USERS befor", users);
  class User {
    constructor(name, pasword) {
      this.name = name;
      this.pasword = pasword;
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
    const isExist = users.filter((user) => user.name === nameDom.value);
    if (isExist[0]) {
      alert("the user name alredy exist");
    } else {
      setUsers((prev) => {
        const users = [...prev];
        return [...users, new User(name, pasword)];
      });
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
