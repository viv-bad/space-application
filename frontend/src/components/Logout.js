import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove tokens, etc.)
    // Clear user authentication information from localStorage
    localStorage.removeItem("token"); // Remove the authentication token or any other relevant data

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>Are you sure you want to logout?</button>
  );
};

export default Logout;
