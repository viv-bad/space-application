import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

const HomePage = () => {
  const [astronauts, setAstronauts] = useState([]);
  // console.log(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the list of astronauts from the backend API
    axios
      .get("http://localhost:8000/astronauts", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        setAstronauts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = (id) => {
    // Handle edit action for astronaut with the given id
    const astronautToEdit = astronauts.find((astronaut) => astronaut.id === id);
    console.log("Edit astronaut with id:", id);
    // console.log(astronautToEdit);
    navigate(`/edit-astronaut/${id}`, { state: astronautToEdit });
  };

  const handleDelete = (id) => {
    // Confirm if the user wants to delete the astronaut
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this astronaut?"
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:8000/astronauts/${id}`)
        .then((response) => {
          setAstronauts((prevAstronauts) =>
            prevAstronauts.filter((astronaut) => astronaut.id !== id)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // Handle delete action for astronaut with the given id
    // console.log("Delete astronaut with id:", id);
  };

  // console.log(astronauts);

  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "linear-gradient(to right, #000000, #999999)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Table sx={{ marginTop: "0px", marginBottom: "0px" }}>
        <TableHead>
          <TableRow sx={{ background: "#1d1d1d", cursor: "pointer" }}>
            <TableCell sx={{ color: "#ffffff", cursor: "pointer" }}>
              Astronaut ID
            </TableCell>
            <TableCell sx={{ color: "#ffffff", cursor: "pointer" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#ffffff", cursor: "pointer" }}>
              Mission
            </TableCell>
            <TableCell sx={{ color: "#ffffff", cursor: "pointer" }}>
              Email
            </TableCell>
            <TableCell sx={{ color: "#ffffff" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {astronauts.map((astronaut) => (
            <TableRow
              sx={{ "&:hover": { background: "#999999", cursor: "pointer" } }}
            >
              <TableCell sx={{ color: "#ffffff" }}>{astronaut.id}</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>{astronaut.name}</TableCell>
              <TableCell sx={{ color: "#ffffff" }}>
                {astronaut.mission}
              </TableCell>
              <TableCell sx={{ color: "#ffffff" }}>{astronaut.email}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleEdit(astronaut.id)}
                  sx={{
                    background: "#7094ff",
                    color: "#ffffff",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(astronaut.id)}
                  sx={{
                    background: "#ff3366",
                    color: "#ffffff",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomePage;
