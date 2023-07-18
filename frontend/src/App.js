import "./App.css";
import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";
import EditAstronaut from "./pages/EditAstronaut";
import CreateAstronaut from "./pages/CreateAstronaut";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#345",
    },
    background: {
      default: "linear-gradient(to right, #333333, #cccccc)",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/create-astronaut" element={<CreateAstronaut />} />
          <Route path="/logout" element={<Logout />} />
          {/* private route */}
          <Route path="/home" element={<PrivateRoute component={HomePage} />} />
          <Route path="/edit-astronaut/:id" element={<EditAstronaut />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
