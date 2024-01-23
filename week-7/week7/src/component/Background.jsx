import React, { useState } from "react";

export default function Background() {
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ ...styles, backgroundColor: backgroundColor }}>
      <div>
        <button onClick={() => handleColorChange("red")}>Red</button>
        <button onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button onClick={() => handleColorChange("black")}>Black</button>
        <button onClick={() => handleColorChange("purple")}>Purple</button>
        <button onClick={() => handleColorChange("green")}>Green</button>
        <button onClick={() => handleColorChange("blue")}>Blue</button>
        <button onClick={() => handleColorChange("")}>Default</button>
      </div>
    </div>
  );
}

const styles = {
  width: "100vw", // 100% of the viewport width
  height: "100vh", // 100% of the viewport height
};
