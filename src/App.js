import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Form } from "./components/Form";
import "./index.css";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="tailw" mode={mode} toggleMode={toggleMode} />
      <Form heading="Hello there , Complete it .." />
    </>
  );
}

export default App;
