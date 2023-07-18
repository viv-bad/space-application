import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill in all fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Perform registration logic here
      // console.log(name, email, password, confirmPassword);
      axios
        .post("http://localhost:8000/register", {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("Registration successful");
          } else {
            setError("Error registering user");
          }
        })
        .catch((error) => {
          setError("Error registering user");
          console.log(error.message);
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
      <h1>Registration</h1>
      <TextField
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <TextField
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <Button variant="contained" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default RegistrationPage;
