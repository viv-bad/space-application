import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Cookies from "js-cookie";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // setAuthenticated(!!localStorage.getItem("token"));
  // useEffect(() => {
  //   setAuthenticated(!!localStorage.getItem("token"));
  // }, []);

  useEffect(() => {
    setAuthenticated(!!Cookies.get("token"));
  }, []);

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
            const { access_token } = response.data;
            // Successful login, redirect to home
            Cookies.set("token", access_token);
            setAuthenticated(true);

            // localStorage.setItem("token", access_token);
            navigate("/home");
            // console.log(authenticated);
            // console.log(!!localStorage.getItem("token"));

            // setAuthenticated(!!localStorage.getItem("token"));
            // console.log(authenticated);
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
      {/* <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button> */}
      <Button color="inherit" component={Link} to="/register">
        Register
      </Button>
    </Box>
  );
};

export default LoginPage;
