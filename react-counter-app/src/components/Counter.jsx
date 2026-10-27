import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay"
import { CounterButton } from "./CounterButton"

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div>
      <h2>カウンターアプリ</h2>
      <CounterDisplay count={count} />
      <CounterButton label="+" onClick={increment} disabled={count >= 10} />
      <CounterButton label="-" onClick={decrement} disabled={count <= 0} />
    </div>
  )
}