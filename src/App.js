import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUpPage from "./Pages/Signup";
const theme = createTheme();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignUpPage />
      </ThemeProvider>
    </>
  );
};

export default App;
