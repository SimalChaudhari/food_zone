import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css";

import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      ></Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"}  sx={{
          bgcolor: "transparent",
          borderRadius: 0,
          boxShadow: "none",
          borderBottom: "none",
        }}>
          <Container maxWidth="xl">
            <Toolbar>
              <RestaurantMenuIcon
                edge="start"
                // Set color to black
                sx={{
                  mr: 2,
                  color: "black",
                }}
              />

              <Typography
              color="#000"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <div>
                <span>Perfect</span>
                <span>Recipe</span>
              </div>
            </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Recipe</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>Add Recipe</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>About us</NavLink>
                  </li>
                </ul>
              </Box>
              <Stack spacing={2} direction="row">
                <Button variant="contained">Login</Button>
                <Button variant="contained">Sign Up</Button>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
