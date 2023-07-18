import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Astronaut Manager App
        </Typography>
        <Button color="inherit">
          <Link to="/login">Login</Link>
        </Button>
        <Button color="inherit">
          <Link to="/register">Register</Link>
        </Button>
        <Button color="inherit">
          <Link to="/logout">Logout</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
