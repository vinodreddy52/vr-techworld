import React from "react";
import { Box, Container, Typography } from "@mui/material";
//import ThemeToggle from "../components/ThemeToggle";

const Privacy = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100%",
        bgcolor: "var(--surface)",
        minHeight: { md: "100vh" },
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        pt: { xs: 12, sm: 13, md: 14 },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 3, md: 4 } }}>
        <Box sx={{ position: "absolute", top: 12, right: 12 }}>
          {/* <ThemeToggle /> */}
        </Box>

        <Typography
          component="h1"
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 800,
            fontSize: { xs: "1.25rem", md: "1.85rem" },
            mb: 2,
            color: "var(--text)",
          }}
        >
          Privacy Policy
        </Typography>

        <Typography sx={{ fontFamily: '"Outfit", sans-serif', color: "var(--muted)", lineHeight: 1.7 }}>
          Your privacy is important to us. This page explains how we collect, use, and protect your
          information when you use VR Techworld services. We collect only the information necessary
          to provide services and communicate with you. We do not sell personal data. For requests
          about your data, contact us at vrtechworld19@gmail.com.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "var(--text)" }}>
            Information We Collect
          </Typography>
          <Typography sx={{ color: "var(--muted)", mb: 2 }}>
            We may collect contact information, messages you send us, and analytics data to improve
            the site.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "var(--text)" }}>
            How We Use Information
          </Typography>
          <Typography sx={{ color: "var(--muted)", mb: 2 }}>
            We use information to respond to inquiries, provide services, and maintain the website.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "var(--text)" }}>
            Contact
          </Typography>
          <Typography sx={{ color: "var(--muted)" }}>
            Email: vrtechworld19@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;
