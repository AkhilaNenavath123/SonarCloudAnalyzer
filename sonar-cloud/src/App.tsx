import React from "react";
import "./App.css";
import CardContain from "./components/organism/CardContain";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CardContain />
      <Typography>learn react</Typography>
    </div>
  );
}

export default App;
