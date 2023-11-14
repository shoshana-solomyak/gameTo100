import GameTo100 from "./GameTo100";
function GameCenter({ users, setUsers, saveUsers }) {
  return (
    <div id="gameBox">
      {users.map((user, key) => (
        <GameTo100
          user={user}
          setUsers={setUsers}
          key={key}
          saveUsers={saveUsers}
        />
      ))}
    </div>
  );
}
export default GameCenter;
