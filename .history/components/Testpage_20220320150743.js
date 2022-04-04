import React, { useState } from "react";

function App() {
  const [bgColour, setBgColour] = useState("url(./images/vespa/vespa09.jpg)");

  const appStyles = {
    height: "100vh",

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

    background: "url(./images/vespa/vespa09.jpg)",
  };

  return (
    <div className="App" style={appStyles}>
      <button
        style={styles}
        onMouseEnter={() => setBgColour("#c83f49")}
        onMouseLeave={() => setBgColour("#fafafa")}
      >
        {" "}
        Red
      </button>
    </div>
  );
}

export default App;
