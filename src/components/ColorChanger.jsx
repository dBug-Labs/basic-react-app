import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("#141414");

  function handleInputChange(event) {
    setColor(event.currentTarget.value);
  }

  return (
    <div
      className="color-changer"
      style={{
        backgroundColor: color, // This is the line that changes the background color
      }}>
      <h1>Color Changer</h1>
      <div className="card">
        <input id="colorBackgroundInput" onChange={handleInputChange} value={color} type="text" />
      </div>
      <p className="paragraph">Try changing the color code!!</p>
    </div>
  );
}

export { ColorChanger };
