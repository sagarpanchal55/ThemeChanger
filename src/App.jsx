import { useEffect, useState } from "react";
import Button from "./Button";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [textSize, setTextSize] = useState("default");
  const [operation, setOperation] = useState("");

  const fontColors = ["green", "red", "blue"];
  const bgColors = ["yellow", "purple", "silver"];
  const textSizes = ["small", "medium", "large"];

  useEffect(() => {
    setBgColor("");
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.color = fontColor;
  }, [fontColor]);

  useEffect(() => {
    if (textSize === "small") {
      document.body.style.fontSize = "12px";
    } else if (textSize === "medium") {
      document.body.style.fontSize = "16px";
    } else if (textSize === "large") {
      document.body.style.fontSize = "20px";
    }
  }, [textSize]);

  return (
    <div className="full-page" style={{ backgroundColor: bgColor }}>
      <div className="header">
        <Button
          handleClick={() => setTheme("light")}
          buttonText={"Light Theme"}
        />
        <Button
          handleClick={() => setTheme("dark")}
          buttonText={"Dark Theme"}
        />

        <div className="main-content">
          <h1>This is the Main Content!</h1>
        </div>

        <div className="buttons">
          <Button
            handleClick={() => setOperation("fontColor")}
            buttonText={"Change Text Color"}
          />
          {operation === "fontColor" && (
            <div className="btns">
              {fontColors.map((color) => (
                <Button
                  key={color}
                  handleClick={() => setFontColor(color)}
                  buttonText={color}
                />
              ))}
            </div>
          )}
        </div>
        <div className="buttons">
          <Button
            handleClick={() => setOperation("changeBg")}
            buttonText={"Background Color"}
          />
          {operation === "changeBg" && (
            <div className="btns">
              {bgColors.map((color) => (
                <Button
                  key={color}
                  handleClick={() => setBgColor(color)}
                  buttonText={color}
                />
              ))}
            </div>
          )}
        </div>

        <div className="buttons">
          <Button
            handleClick={() => setOperation("fontSize")}
            buttonText={"Text Size"}
          />
          {operation === "fontSize" && (
            <div className="btns">
              {textSizes.map((size) => (
                <Button
                  key={size}
                  handleClick={() => setTextSize(size)}
                  buttonText={size}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
