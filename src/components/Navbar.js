import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#1F4068" }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/images/white_newlogo.png"
              alt="VR Techworld"
              style={{
                width: "180px",
                height: "auto",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("home")}
            />
          </Box>

          {/* Desktop Menu (Hidden on Small Screens) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" onClick={() => handleNavigation("home")}>
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/service">
              Services
            </Button>
            <Button color="inherit" component={RouterLink} to="/pricing">
              Pricing
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              Contact
            </Button>
          </Box>

          {/* Mobile Menu (Drawer) */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigation("home")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/service">
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/pricing">
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
