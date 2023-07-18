import React, { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);
  console.log(isAuthenticated);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Astronaut Manager App
        </Typography>
        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/login">
            Login <LoginIcon />
          </Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/home">
              Home <HomeIcon />
            </Button>
            <Button color="inherit" component={Link} to="/logout">
              Logout <LogoutIcon />
            </Button>
          </>
        )}
        {/* <Button color="inherit" component={Link} to="/home">
          Home <HomeIcon />
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login <LoginIcon />
        </Button>
        <Button color="inherit" component={Link} to="/logout">
          Logout <LogoutIcon />
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
