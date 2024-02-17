import React, { useState } from "react";
import Window from "./Window";

function MyButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
}

export default function WidgetStateExample() {
  return (
    <Window>
      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          Counters that update separately
        </div>
        <MyButton />
        <MyButton />
      </div>
    </Window>
  );
}
