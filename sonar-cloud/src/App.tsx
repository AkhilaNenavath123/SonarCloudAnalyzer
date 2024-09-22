import React from "react";
import SimpleButton from "./components/Button";
import { Typography, Box } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <SimpleButton variant="contained" color="primary">
        Click Me
      </SimpleButton>
      <Typography variant="h6" mt={2}>
        Learn React
      </Typography>
    </Box>
  );
}

export default App;
