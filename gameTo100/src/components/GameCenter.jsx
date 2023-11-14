import GameTo100 from "./GameTo100";
function GameCenter({ users, setUsers }) {
  return (
    <div id="gameBox">
      {users.map((user, key) => (
        <GameTo100 user={user} setUsers={setUsers} key={key} />
      ))}
    </div>
  );
}
export default GameCenter;
