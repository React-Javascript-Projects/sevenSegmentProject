import "./App.css";
import React, { useState } from "react";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Container from "./components/UI/Container";
import SevenSegment from "./components/seven/SevenSegment";

function App() {
  let textInput = React.createRef();

  const [errotext, setErorText] = useState("");
  const [number, setNumber] = useState("");

  const displayHandler = () => {
    const num = textInput.current.value;
    setNumber("");
    if (!isNaN(num)) {
      if (num >= 1 && num <= 999) {
        setNumber(textInput.current.value);
        setText("");
      } else setText("The Number should be between 1 to 999");
    } else {
      setText("You should Enter Number");
    }
  };

  return (
    <div className="app">
      <Input ref={textInput} placeholder="Type a number ..." />
      <p>{text}</p>
      <Button onClick={displayHandler}>Disply</Button>
      <Container>
        {number &&
          number
            .split("")
            .map((num, index) => <SevenSegment num={num} key={index} />)}
      </Container>
    </div>
  );
}

export default App;
