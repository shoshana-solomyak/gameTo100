function Register({ users, setUsers }) {
  console.log("USERS", users);
  class User {
    constructor(name, pasword) {
      this.name = name;
      this.pasword = pasword;
    }
  }
  function handelRegister() {
    const nameDom = document.getElementById("name");
    const paswordDom = document.getElementById("pasword");
    const isExist = users.filter((user) => user.name === nameDom.value);
    console.log(isExist);
    if (isExist[0]) {
      console.log("is", isExist);
      alert("the user name alredy exist");
    } else {
      setUsers((prev) => [...prev, new User(nameDom.value, paswordDom.value)]);
      alert("add user secsecfuly");
    }
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
