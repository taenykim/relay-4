import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { drawImage } from "./utils/utils";
import dummy2 from "./dummy";

const App = () => {
  const [image, setImage] = useState(null);
  const [check, setCheck] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    drawText(inputValue);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const drawText = (inputValue) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.font = "14px Arial";
    ctx.fillText(inputValue, check.x, check.y - 2);
  };

  useEffect(() => {
    if (image) {
      const canvas = document.getElementById("canvas");
      drawImage(canvas, dummy2);
      canvas.addEventListener("mousemove", (e) => {
        for (const index in dummy2) {
          if (e.offsetX > dummy2[index].x && e.offsetX < dummy2[index].x + dummy2[index].width) {
            if (e.offsetY > dummy2[index].y && e.offsetY < dummy2[index].y + dummy2[index].height) {
              return (canvas.style.cursor = "pointer");
            }
          }
        }
        return (canvas.style.cursor = "default");
      });
      canvas.addEventListener("mousedown", (e) => {
        setCheck(false);
        for (const index in dummy2) {
          if (e.offsetX > dummy2[index].x && e.offsetX < dummy2[index].x + dummy2[index].width) {
            if (e.offsetY > dummy2[index].y && e.offsetY < dummy2[index].y + dummy2[index].height) {
              setCheck(dummy2[index]);
              dummy2.splice(index, 1);
            }
          }
        }
        if (check) {
          console.log(`클릭했습니다.`);
        }
      });
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
      {check ? (
        <div>
          이름을 입력하세요
          <form onSubmit={submitHandler}>
            <input onChange={inputValueHandler}></input>
          </form>
        </div>
      ) : (
        <div>{check}</div>
      )}
    </div>
  );
};

export default App;
