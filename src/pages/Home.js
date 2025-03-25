import React from "react";
import { Container, Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { ArrowForward, DesignServices, BusinessCenter, ContactSupport } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ overflowX: "hidden" }}> {/* Prevents horizontal scrolling */}
      
      <Box
        sx={{
          background: "linear-gradient(to right, #1F4068, #5C258D)",
          color: "white",
          py: { xs: 8, sm: 10, md: 15 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md" style={{whiteSpace:'nowrap'}}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "36px", lg: "42px" },
            }}
          >
            Empower Your Business with Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
              opacity: 0.8,
              mb: 3,
            }}
          >
            We provide innovative and high-quality solutions to help your business succeed in the digital era.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="https://wa.me/919042238332"
            target="_blank"
            endIcon={<ArrowForward />}
            sx={{
              borderRadius: "30px",
              px: { xs: 1, sm: 2, md: 3 }, // Reduced padding
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Overview */}
      <Container sx={{ py: { xs: 6, sm: 8, md: 4 }, overflowX: "hidden" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
          }}
        >
          What We Offer
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            opacity: 0.7,
            mb: 5,
          }}
        >
          Discover our customized services designed to meet your business needs.
        </Typography>

        <Grid container spacing={4} sx={{ width: "100%", margin: "0 auto" }}>
          {[
            {
              icon: <DesignServices fontSize="large" sx={{ color: "#FF9800" }} />,
              title: "Website & Logo Design",
              description: "Crafting visually stunning and user-friendly websites & logos.",
            },
            {
              icon: <BusinessCenter fontSize="large" sx={{ color: "#4CAF50" }} />,
              title: "Business Registration",
              description: "Helping you register your business hassle-free.",
            },
            {
              icon: <ContactSupport fontSize="large" sx={{ color: "#E91E63" }} />,
              title: "Marketing & Ads",
              description: "Boosting your brand’s presence with targeted campaigns.",
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" },
                }}
              >
                <CardContent>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      opacity: 0.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", py: { xs: 6, sm: 8, md: 10 }, backgroundColor: "#F5F5F5" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
          }}
        >
          Ready to Elevate Your Business?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            opacity: 0.7,
            mb: 3,
          }}
        >
          Let’s work together to build something great!
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/contact")}
          color="primary"
          size="large"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            borderRadius: "30px",
          }}
        >
          Contact Us
        </Button>
      </Box>

    </Box>
  );
};

export default Home;
