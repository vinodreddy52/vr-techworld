import React from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";

const NotFound = () => (
  <Box component="main" sx={{ bgcolor: "var(--surface)", minHeight: "70vh", display: "flex", alignItems: "center", pt: { xs: 12, md: 14 }, pb: 6 }}>
    <Helmet>
      <title>Page not found | VR DIGITAL & CORPORATE HUB</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Typography component="h1" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: { xs: "2rem", md: "2.6rem" }, color: "var(--text)", mb: 1 }}>
        Page not found
      </Typography>
      <Typography sx={{ fontFamily: '"Outfit", sans-serif', color: "var(--muted)", lineHeight: 1.7, mb: 3 }}>
        The page you are looking for does not exist or has moved. Try one of these instead.
      </Typography>
      <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
        <Button component={RouterLink} to="/" variant="contained" sx={{ textTransform: "none", bgcolor: "var(--accent)", boxShadow: "none", "&:hover": { bgcolor: "var(--accent-hover)", boxShadow: "none" } }}>
          Go to home
        </Button>
        <Button component={RouterLink} to="/service" variant="outlined" sx={{ textTransform: "none" }}>
          View services
        </Button>
        <Button component={RouterLink} to="/contact" variant="outlined" sx={{ textTransform: "none" }}>
          Contact us
        </Button>
      </Box>
    </Container>
  </Box>
);

export default NotFound;
