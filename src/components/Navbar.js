import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname === "/") {
      scroll.scrollTo(document.getElementById(id).offsetTop - 80, { smooth: true });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1F4068" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          VR Techworld
        </Typography>
        <Box>
          {["Home", "Service", "Pricing", "Contact"].map((item, index) => (
            location.pathname === "/" ? (
              <Button key={index} color="inherit" component={ScrollLink} to={item.toLowerCase()} smooth={true} offset={-80}>
                {item}
              </Button>
            ) : (
              <Button key={index} color="inherit" className="nav_item" component={RouterLink} to={`/${item.toLowerCase()}`} onClick={() => handleClick(item.toLowerCase())}>
                {item}
              </Button>
            )
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
