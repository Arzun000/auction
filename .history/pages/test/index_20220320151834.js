import React, { useState } from "react";

function App() {
  const [bg, setBg] = useState("url(./images/vespa/vespa09.jpg)");

  const appStyles = {
    height: "240px",
    width: "240px",
    background: `${bg}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
      <div
        style={styles}
        onMouseEnter={() => setBg("#c83f49")}
        onMouseLeave={() => setBg("#fafafa")}
      >
        Red
      </div>
    </div>
  );
}

export default App;
