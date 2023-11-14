function Login() {
  function handleLogin() {
    const nameDom = document.getElementById("name");
    const paswordDom = document.getElementById("pasword");
    const name = nameDom.value;
    const pasword = paswordDom.value;
    if (name === "" || pasword === "") {
      alert("fill all");
      return;
    }
    function checkLogin() {
      let usersArr = JSON.parse(localStorage.getItem(users));
      return usersArr.forEach(
        usersArr.name === name && usersArr.pasword === pasword
      );
    }
    checkLogin();
    nameDom.value = "";
    paswordDom.value = "";
  }
  return (
    <div>
      <input id="name" type="text" placeholder="user name" />
      <br />
      <input id="pasword" type="text" placeholder="pasword" />
      <br />
      <button onClick={handleLogin}>join</button>
    </div>
  );
}
export default Login;
