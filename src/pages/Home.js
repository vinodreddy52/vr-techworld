import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Button, Container } from "@mui/material";
//import ThemeToggle from "../components/ThemeToggle";
import { ArrowForward, DesignServices, BusinessCenter, Campaign } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//import NextPageSection from "../components/NextPageSection";
import "./Home.css";

const services = [
  {
    icon: DesignServices,
    title: "Website & Logo Design",
    description: "Modern sites and marks that feel sharp, clear, and built for your brand.",
  },
  {
    icon: BusinessCenter,
    title: "Business Registration",
    description: "GST, firm, MSME, and compliance support handled with less friction.",
  },
  {
    icon: Campaign,
    title: "Marketing & Ads",
    description: "Focused campaigns that put your offer in front of the right people.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
      <Box component="main"
        sx={{
          overflowX: "hidden",
          width: "100%",
          maxWidth: "100%",
          bgcolor: "var(--surface)",
          boxSizing: "border-box",
        }}
      >
      <Helmet>
        <title>VR DIGITAL & CORPORATE HUB — Build a sharper digital presence</title>
        <meta name="description" content="Websites, branding, registration, and marketing services to help small businesses grow online." />
        <meta name="keywords" content="web design, logo design, business registration, GST, MSME, digital marketing" />
        <link rel="canonical" href="%PUBLIC_URL%/" />
      </Helmet>
      {/* Hero */}
      <Box
        id="home"
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: "auto", md: "48vh" },
          display: "flex",
          alignItems: "center",
          color: "#fff",
          pt: { xs: 12, sm: 13, md: 12 },
          pb: { xs: 4, md: 5 },
          isolation: "isolate",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
            overflow: "hidden",
          }}
        >
            <Box
              className="home-hero-media"
              component="img"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
              srcSet={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80 640w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1024&q=80 1024w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80 1600w,
                        https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80 2000w`}
              sizes="(max-width:600px) 100vw, (max-width:1200px) 100vw, 1600px"
              width={1600}
              height={960}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              alt="Digital business branding and website design concept"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
        </Box>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            background: `
              linear-gradient(
                105deg,
                rgba(11, 29, 54, 0.94) 0%,
                rgba(31, 64, 104, 0.82) 48%,
                rgba(31, 64, 104, 0.45) 100%
              )
            `,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", width: "100%" }}>
          <Box sx={{ position: "absolute", top: 12, right: 12 }}>
           
          </Box>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              className="home-fade-up home-fade-up-delay-1"
              component="h1"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                mb: 1.5,
                maxWidth: "14ch",
              }}
            >
              Build a sharper digital presence
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#FFB58A",
                mb: 1.5,
              }}
            >
              Digital growth partner
            </Typography>

            <Typography
              className="home-fade-up home-fade-up-delay-2"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 400,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.88)",
                mb: 3,
                maxWidth: 520,
              }}
            >
              Websites, branding, registration, and growth support so your business looks polished, launches faster, and stays compliant.
            </Typography>

            <Box
              className="home-fade-up home-fade-up-delay-2"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: 4,
                maxWidth: 560,
              }}
            >
              {[
                "Design-led websites",
                "Brand identity",
                "Business registration",
                "Growth campaigns",
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 2.25,
                    py: 1,
                    borderRadius: "999px",
                    bgcolor: "rgba(255,255,255,0.12)",
                    color: "#fff",
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>

            <Box
              className="home-fade-up home-fade-up-delay-3"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "wrap",
                gap: 1.5,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="https://wa.me/919042238332"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForward />}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  textTransform: "none",
                  bgcolor: "#FF6B35",
                  color: "#fff",
                  px: 3,
                  py: 1.25,
                  borderRadius: "6px",
                  boxShadow: "none",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    bgcolor: "#E85A28",
                    boxShadow: "none",
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate("/service")}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  textTransform: "none",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.45)",
                  px: 3,
                  py: 1.25,
                  borderRadius: "6px",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                View Services
              </Button>
            </Box>
            <Typography
              className="home-fade-up home-fade-up-delay-4"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 500,
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.78)",
                mt: 3,
                maxWidth: 560,
              }}
            >
              Ready to launch faster with a polished website, trusted business setup, and campaigns that drive leads.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Why choose us */}
      <Box
        component="section"
        sx={{
          py: { xs: 5, md: 8 },
          bgcolor: "var(--surface)",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 2, md: 3 },
              mb: { xs: 3, md: 4 },
            }}
          >
            {[
              {
                title: "Launch faster",
                text: "Get your website live quickly with polished design, branding, and registration support.",
              },
              {
                title: "Grow consistently",
                text: "Digital campaigns, SEO, and analytics help you attract more leads and build trust.",
              },
              {
                title: "Stay compliant",
                text: "Business registration, GST, and compliance support keeps your company running smoothly.",
              },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 32px 80px rgba(15, 27, 56, 0.08)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    mb: 1,
                    color: "var(--text)",
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
        </Container>
      </Box>

      {/* <NextPageSection
        title="Want to explore more?"
        description="See the full range of services we offer and choose the next step for your business." 
        href="/service"
        buttonLabel="View Services"
      />
 */}
      {/* Services */}
          <Box
        component="section"
        sx={{
          py: { xs: 5, md: 8 },
          bgcolor: "var(--card-bg)",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { md: "end" },
              justifyContent: "space-between",
              gap: 2,
              mb: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ maxWidth: 480 }}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: "1.75rem", md: "2.35rem" },
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  mb: 1,
                }}
              >
                What we offer
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  color: "var(--muted)",
                  lineHeight: 1.6,
                }}
              >
                Focused services to help you launch, grow, and stay compliant.
              </Typography>
            </Box>
                <Button
              onClick={() => navigate("/service")}
              endIcon={<ArrowForward />}
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                textTransform: "none",
                  color: "var(--appbar-bg)",
                alignSelf: { xs: "flex-start", md: "auto" },
                px: 0,
                minWidth: 0,
                "&:hover": {
                    bgcolor: "transparent",
                    color: "var(--accent)",
                },
              }}
            >
              All services
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 2.5 } }}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Box
                  key={service.title}
                  className="home-service-item"
                  onClick={() => navigate("/service")}
                  sx={{
                    cursor: "pointer",
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "auto 1fr",
                      md: "64px 56px 1fr auto",
                    },
                    alignItems: "center",
                    gap: { xs: 2, md: 3 },
                    px: { xs: 2, md: 3 },
                    py: { xs: 2.75, md: 3.25 },
                    bgcolor: "rgba(255,255,255,0.06)",
                    borderRadius: "18px",
                    borderLeft: "3px solid transparent",
                    transition: "background-color 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                    boxShadow: "0 20px 50px rgba(15, 27, 56, 0.06)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.18)",
                      borderLeftColor: "#FF6B35",
                      transform: "translateY(-4px)",
                    },
                    "&:hover .home-service-title": {
                      color: "#FF6B35",
                    },
                    "&:hover .home-service-arrow": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>

                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "8px",
                      bgcolor: "var(--card-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--appbar-bg)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>

                  <Box>
                            <Typography
                      className="home-service-title"
                      sx={{
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        color: "var(--text)",
                        mb: 0.4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: { xs: "0.9rem", md: "0.98rem" },
                        color: "var(--muted-2)",
                        lineHeight: 1.55,
                        maxWidth: 560,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                  <ArrowForward
                    className="home-service-arrow"
                    sx={{
                      display: { xs: "none", md: "block" },
                      color: "var(--appbar-bg)",
                      opacity: 0.35,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        component="section"
        sx={{
          position: "relative",
          py: { xs: 5, md: 8 },
          px: { xs: 0 },
          background: "linear-gradient(120deg, #0B1D36 0%, #1F4068 100%)",
          color: "#fff",
          overflow: "hidden",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            right: { xs: -180, md: -100 },
            top: { xs: -160, md: -120 },
            background: "radial-gradient(circle, rgba(255,107,53,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.4rem" },
              letterSpacing: "-0.02em",
              mb: 1.5,
            }}
          >
            Ready to elevate your business?
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "rgba(255,255,255,0.75)",
              mb: 4,
              maxWidth: 420,
              mx: "auto",
            }}
          >
            Tell us what you need — we’ll help you shape the next step.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#FF6B35",
              color: "#fff",
              px: { xs: 3, md: 4 },
              py: 1.35,
              borderRadius: "6px",
              boxShadow: "none",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: 320, sm: "none" },
              "&:hover": {
                bgcolor: "#E85A28",
                boxShadow: "none",
              },
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
