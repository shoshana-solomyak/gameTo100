import GameTo100 from "./GameTo100";
function GameCenter({ users }) {
  return (
    <div id="gameBox">
      {users.map((value, key) => (
        <GameTo100 key={key} />
      ))}
    </div>
  );
}
export default GameCenter;
