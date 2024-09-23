import React from "react";
import { Typography, Box } from "@mui/material";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleDisabledClick = () => {
    alert("This button should be disabled");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the App!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined Button
      </Button>
      <Button variant="text" color="success">
        Text Button
      </Button>
      <Button disabled onClick={handleDisabledClick}>
        Disabled Button
      </Button>
    </Box>
  );
}

export default App;
