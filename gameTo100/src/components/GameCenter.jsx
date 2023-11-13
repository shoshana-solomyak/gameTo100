import GameTo100 from "./GameTo100";
function GameCenter(users, setUser) {
  let users = [1, 2, 3];
  return (
    <div id="gameBox">
      {users.map((value, key) => (
        <GameTo100 key={key} />
      ))}
    </div>
  );
}
export default GameCenter;
