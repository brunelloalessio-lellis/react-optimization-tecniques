import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING')

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => {
      return !prev;
    });
  };

  //control before rendering is better than editing an attribute

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <DemoOutput/>}
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
