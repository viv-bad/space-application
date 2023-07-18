import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Box } from "@mui/material";
import axios from "axios";

const EditAstronaut = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mission, setMission] = useState("");

  const location = useLocation();
  const astronautData = location.state;

  const navigate = useNavigate();

  useEffect(() => {
    if (astronautData) {
      setName(astronautData.name);
      setEmail(astronautData.email);
      setMission(astronautData.mission);
    }
  }, [astronautData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedAstronaut = {
      id: astronautData.id,
      name,
      email,
      mission,
    };

    axios
      .put(
        `http://localhost:8000/astronauts/${astronautData.id}`,
        updatedAstronaut
      )
      .then((response) => {
        console.log("Astronaut updated successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error updating astronaut", error);
      });

    console.log("submit");
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" component="h2" mb={2}>
        Edit Astronaut
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          label="Mission"
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" type="submit">
          Update Astronaut
        </Button>
      </Box>
    </Box>
  );
};

export default EditAstronaut;
