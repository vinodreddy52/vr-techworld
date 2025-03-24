import React from "react";
import { Container, Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { ArrowForward, DesignServices, BusinessCenter, ContactSupport } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        background: "linear-gradient(to right, #1F4068, #5C258D)",
        color: "white",
        py: 10,
        textAlign: "center",
        whiteSpace:'nowrap'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Empower Your Business with Our Services
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 3 }}>
            We provide innovative and high-quality solutions to help your business succeed in the digital era.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForward />}
            sx={{ borderRadius: "30px", px: 4 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Overview */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          What We Offer
        </Typography>
        <Typography variant="body1" align="center" sx={{ opacity: 0.7, mb: 5 }}>
          Discover our customized services designed to meet your business needs.
        </Typography>

        <Grid container spacing={4}>
          {[{
            icon: <DesignServices fontSize="large" sx={{ color: "#FF9800" }} />, 
            title: "Website & Logo Design", 
            description: "Crafting visually stunning and user-friendly websites & logos."
          }, {
            icon: <BusinessCenter fontSize="large" sx={{ color: "#4CAF50" }} />, 
            title: "Business Registration", 
            description: "Helping you register your business hassle-free."
          }, {
            icon: <ContactSupport fontSize="large" sx={{ color: "#E91E63" }} />, 
            title: "Marketing & Ads", 
            description: "Boosting your brand’s presence with targeted campaigns."
          }].map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{
                textAlign: "center",
                p: 3,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" },
              }}>
                <CardContent>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#F5F5F5" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Elevate Your Business?
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7, mb: 3 }}>
          Let’s work together to build something great!
        </Typography>
        <Button variant="contained" onClick={() => navigate("/contact")} color="primary" size="large" sx={{ px: 5, borderRadius: "30px" }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
