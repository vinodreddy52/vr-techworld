import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          VR Techworld
        </Typography>
        <Box>
          {["Home", "About", "Pricing", "Contact"].map((item, index) => (
            <Button key={index} color="inherit" component={Link} to={`/${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
