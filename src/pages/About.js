import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Container, Typography, Button } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConstructionIcon from '@mui/icons-material/Construction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();

  return (
    <Box component="main"
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
      <Helmet>
        <title>About Us — VR DIGITAL & CORPORATE HUB</title>
        <meta name="description" content="Learn about VR DIGITAL & CORPORATE HUB, our mission, services, and why small businesses choose us for web design, business registration, and digital marketing." />
        <meta name="keywords" content="about VR DIGITAL & CORPORATE HUB, web design agency, business registration services, digital marketing agency" />
        <link rel="canonical" href="%PUBLIC_URL%/about" />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        <Typography
          component="h1"
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "var(--text)",
            mb: 2,
          }}
        >
          We help businesses grow with websites, branding, and business registration.
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: { xs: "1rem", md: "1.05rem" },
            color: "var(--muted)",
            lineHeight: 1.8,
            maxWidth: 760,
            mb: 4,
          }}
        >
          VR DIGITAL & CORPORATE HUB supports small businesses, startups, and entrepreneurs with a single partner for web design, compliance, marketing, and registration. We combine fast delivery, clear pricing, and practical digital services suited to local business needs.
        </Typography>

        <Box
          sx={{
            mb: 5,
            p: { xs: 3, md: 4 },
            bgcolor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "1.35rem", md: "1.65rem" },
              mb: 2,
              color: "var(--text)",
            }}
          >
            Our Process
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(5, minmax(0, 1fr))" },
              gap: 2,
              alignItems: "stretch",
            }}
          >
            {[
              {
                label: "Consult",
                color: "rgba(255,107,53,0.12)",
                icon: <ChatBubbleOutlineIcon sx={{ fontSize: 26, color: "var(--accent)" }} />,
                text: "We listen to your goals and map the best digital path.",
              },
              {
                label: "Plan",
                color: "rgba(54,144,255,0.12)",
                icon: <EventNoteIcon sx={{ fontSize: 26, color: "#3690ff" }} />,
                text: "We create a clear project plan with timelines and milestones.",
              },
              {
                label: "Build",
                color: "rgba(56,189,248,0.12)",
                icon: <ConstructionIcon sx={{ fontSize: 26, color: "#38b9f8" }} />,
                text: "We design and develop your website, branding, and business setup.",
              },
              {
                label: "Launch",
                color: "rgba(16,185,129,0.12)",
                icon: <RocketLaunchIcon sx={{ fontSize: 26, color: "#10b981" }} />,
                text: "We deploy your site, test it carefully, and make it live.",
              },
              {
                label: "Support",
                color: "rgba(168,85,247,0.12)",
                icon: <SupportAgentIcon sx={{ fontSize: 26, color: "#a855f7" }} />,
                text: "We keep you supported with updates and ongoing growth help.",
              },
            ].map((step, index) => (
              <Box
                key={step.label}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bg: step.color,
                  bgcolor: step.color,
                  borderRadius: "16px",
                  p: 3,
                  minHeight: 120,
                  textAlign: "center",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "default",
                  '&:hover': {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                  },
                  '&:hover .processSymbol': {
                    opacity: 1,
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    mb: 1,
                    bgcolor: "rgba(255,255,255,0.9)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  {step.icon}
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 700,
                    color: "var(--text)",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {step.label}
                  <Box
                    className="processSymbol"
                    sx={{
                      opacity: 0,
                      transform: "translateX(-4px)",
                      transition: "opacity 0.25s ease, transform 0.25s ease",
                      fontSize: "1rem",
                      color: "var(--text)",
                    }}
                  >
                    →
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                    maxWidth: 220,
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 4,
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "To make digital and registration services simple, affordable, and reliable for growing businesses.",
            },
            {
              title: "Our Approach",
              text: "We focus on practical solutions, fast turnaround, and clear communication for every project.",
            },
            {
              title: "What We Offer",
              text: "Website design, branding, GST/MSME/LLP registration, digital ads, and ongoing support.",
            },
            {
              title: "Why Choose Us",
              text: "One partner for website launch, business compliance, and marketing support in India.",
            },
          ].map((item) => (
            <Box
              key={item.title}
              sx={{
                bgcolor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "14px",
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              textTransform: "none",
              bgcolor: "var(--accent)",
              color: "#fff",
              px: 4,
              py: 1.4,
              borderRadius: "8px",
              boxShadow: "none",
              '&:hover': { bgcolor: "var(--accent-hover)" },
            }}
          >
            Talk to Our Team
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/service")}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              textTransform: "none",
              color: "var(--text)",
              borderColor: "var(--card-border)",
              px: 4,
              py: 1.4,
              borderRadius: "8px",
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
