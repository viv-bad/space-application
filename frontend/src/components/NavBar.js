import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Astronaut Manager App
        </Typography>
        <Button color="inherit" component={Link} to="/home">
          <HomeIcon />
        </Button>
        <Button color="inherit" component={Link} to="/login">
          <LoginIcon />
        </Button>
        <Button color="inherit" component={Link} to="/register">
          <HowToRegIcon />
        </Button>
        <Button color="inherit" component={Link} to="/logout">
          <LogoutIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
