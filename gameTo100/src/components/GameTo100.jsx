import { useState } from "react";

function GameTo100() {
  const [num, setNum] = useState(Math.floor(Math.random() * 100));

  return (
    <div className="game">
      {num}
      <div>
        <button onClick={() => setNum(num + 1)}>+1</button>
        <button onClick={() => setNum(num - 1)}>-1</button>
        <button onClick={() => setNum(num * 2)}>x2</button>
        <button onClick={() => setNum(num / 2)}>:2</button>
      </div>
    </div>
  );
}
export default GameTo100;
