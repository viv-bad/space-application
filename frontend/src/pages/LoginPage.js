import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please enter your email and password");
    } else {
      // Perform login logic here
      axios
        .post("http://localhost:8000/login", { email, password })
        .then((response) => {
          // Check the response status and perform actions accordingly
          if (response.status === 200) {
            // Successful login, redirect or perform other actions
            // console.log("Login successful");
            localStorage.setItem("authenticated", true);
            navigate("/home");
            // setAuthenticated(true);
          } else {
            // Handle login error, display error message
            setError("Invalid email or password");
          }
        })
        .catch((error) => {
          // Handle network error or other exceptions
          setError("An error occurred during login");
          console.error(error);
        });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <h1>Login</h1>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
