import React from "react";
import { Container, Grid, Typography, Link, Box, IconButton, Tooltip, Divider } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right, #162447, #1F4068, #1B1B2F)", 
        color: "#fff",
        py: 2, // Reduced padding for shorter height
        mt: 1, // Adjusted margin
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center"> {/* Reduced spacing */}
          
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: "1rem" }}>
              VR Techworld
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.85rem" }}>
              Website design, hosting, and digital services.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: "1rem" }}>
              Quick Links
            </Typography>
            {["Home", "About Us", "Pricing", "Contact"].map((text, index) => (
              <Link
                key={index}
                href={`/${text.toLowerCase().replace(" ", "")}`}
                color="inherit"
                underline="hover"
                display="block"
                sx={{ opacity: 0.8, fontSize: "0.85rem", mb: 0.3 }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: "1rem" }}>
              Contact Us
            </Typography>
            {/* <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.85rem" }}>Chennai, India</Typography> */}
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.85rem" }}>+91 9042238332</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.85rem" }}>vrtechworld19@gmail.com</Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: "1rem" }}>
              Follow Us
            </Typography>
            <Box>
              <Tooltip title="Email" arrow>
                <IconButton target="_blank" color="error" href="mailto:vrtechworld19@gmail.com" sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.1)" } }}>
                  <Email />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow>
                <IconButton target="_blank" color="success" href="https://wa.me/919042238332" sx={{ transition: "0.3s", "&:hover": { transform: "scale(1.1)" } }}>
                  <WhatsApp />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 1.5 }} /> {/* Reduced margin */}

        {/* Copyright */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} VR Techworld. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
