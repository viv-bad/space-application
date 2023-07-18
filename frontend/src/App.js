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

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/logout" element={<Logout />} />
        {/* private route */}
        <Route path="/home" element={<PrivateRoute component={HomePage} />} />
        <Route path="/edit-astronaut/:id" element={<EditAstronaut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
