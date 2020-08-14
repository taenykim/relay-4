import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { drawImage, drawData } from "./utils/utils";

const App = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      const canvas = document.getElementById("canvas");
      drawImage(canvas);
      drawData(canvas);
    }
  }, [image]);
  return (
    <div className="App">
      <input
        type="file"
        onChange={() => {
          setImage("22");
        }}
      ></input>
      {image ? <canvas id="canvas"></canvas> : <img></img>}
    </div>
  );
};

export default App;
