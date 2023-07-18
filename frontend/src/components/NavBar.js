import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Cookies from "js-cookie";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box } from "@mui/material";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, [location]);

  // const handleLogout = () => {
  //   Cookies.remove("token");
  //   setIsAuthenticated(false);
  // };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#333333",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <Button component={Link} to="/home">
            <RocketLaunchIcon
              sx={{ height: "50px", width: "auto", color: "#ffff" }}
            />{" "}
            <Typography sx={{ color: "#ffff" }}>AstroManager</Typography>
          </Button>
        </Typography>
        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/login">
            Login <LoginIcon />
          </Button>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                // gap: "10px",
                flexDirection: "row",
                gap: "30px",
              }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/home"
                sx={{ display: "flex", gap: "5px" }}
              >
                <HomeIcon /> Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/create-astronaut"
                sx={{ display: "flex", gap: "5px" }}
              >
                <PersonAddAltIcon /> Create Astronaut
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/logout"
                sx={{ display: "flex", gap: "5px" }}
              >
                <LogoutIcon /> Logout
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
