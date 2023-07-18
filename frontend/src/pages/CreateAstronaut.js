import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const CreateAstronaut = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mission, setMission] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleCreateAstronaut = () => {
    if (name === "" || email === "" || mission === "") {
      setError("Please fill in all fields");
    } else {
      axios
        .post("http://localhost:8000/astronauts", {
          name: name,
          email: email,
          mission: mission,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("Astronaut created successfully");
            setSuccess("Astronaut created successfully");
            navigate("/home"); // Redirect to the home page after successful creation
          } else {
            setError("Error creating astronaut");
          }
        })
        .catch((error) => {
          setError("Error creating astronaut");
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
        justifyContent: "center",
        height: "50vh",
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h2" mb={2}>
        Create Astronaut
      </Typography>
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
        type="text"
        label="Mission"
        value={mission}
        onChange={(e) => setMission(e.target.value)}
      />
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <Button variant="contained" onClick={handleCreateAstronaut}>
        Create Astronaut
      </Button>
    </Box>
  );
};

export default CreateAstronaut;
