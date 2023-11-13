import GameTo100 from "./GameTo100";
function GameCenter({ users, setUsers }) {
  //   setUsers((prev) => {
  //     const copyUsers = [...prev];
  //     copyUsers[0].active = true;
  //     console.log(" copyUsers: ", copyUsers);

  //     return copyUsers;
  //   });
  return (
    <div id="gameBox">
      {users.map((value, key) => (
        <GameTo100 key={key} user={value} setUsers={setUsers} />
      ))}
    </div>
  );
}
export default GameCenter;
