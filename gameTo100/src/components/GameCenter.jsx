import GameTo100 from "./GameTo100";
function GameCenter({ users, setUsers }) {
  setUsers((prev) => {
    const copyUsers = [...prev];
    copyUsers[0].active = true;
    return copyUsers;
  });
  return (
    <div id="gameBox">
      {users.map((value, key) => (
        <GameTo100 user={value} users={users} setusers={setUsers} key={key} />
      ))}
    </div>
  );
}
export default GameCenter;
