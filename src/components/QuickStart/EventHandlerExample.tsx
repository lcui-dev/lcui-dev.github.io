import React, { useState } from "react";
import Window from "./Window";
import Button from "./Button";

export default function EventHandlerExample() {
  const [text, setText] = useState("Welcome to my app");
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
          {text}
        </div>
        <Button onClick={() => setText("You clicked my button!")}>
          I'm a button
        </Button>
      </div>
    </Window>
  );
}
