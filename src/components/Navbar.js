import React from "react";
import { AppBar, Toolbar,  Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
//import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home first
      setTimeout(() => scrollToSection(id), 300); // Wait for Home to load
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

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1F4068" }}>
      <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
  <img
    src="/images/logo.png"
    alt="VR Techworld"
    style={{
      width: "180px", // Adjust width
      height: "auto",
      objectFit: "contain",
      cursor: "pointer"
    }}
    onClick={() => handleNavigation("home")}
  />
</Box>
        
        <Box>
          <Button color="inherit" onClick={() => handleNavigation("home")}>Home</Button>
          <Button color="inherit" component={RouterLink} to="/service">Services</Button>
          <Button color="inherit" component={RouterLink} to="/pricing">Pricing</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
