import { useState } from 'react';

export default function Main() {
  const [explode, setExplode] = useState(false)
  return (
    <div>
      <button onClick={() => setExplode(true)}>throw error</button>
      {explode ? <Bomb /> : null}
    </div>
  );
}

function Bomb() {
  throw new Error('💥 CABOOM 💥')
  return <h1>bomb</h1>
}