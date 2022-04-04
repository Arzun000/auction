import React, { useState } from "react";

function App() {
  const [bgColour, setBgColour] = useState("#fafafa");

  const appStyles = {
    height: "240px",
    width: "240px";
    background: `${bgColour}`,
  };

  const styles = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "white",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#c83f49",
  };

  return (
    <div className="App" style={appStyles}>
      <button
        style={styles}
        onMouseEnter={() => setBgColour("#c83f49")}
        onMouseLeave={() => setBgColour("#fafafa")}
      >
        Red
      </button>
    </div>
  );
}

export default App;
