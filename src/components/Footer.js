import React from "react";
import { Container, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { Email, WhatsApp, ArrowOutward } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy", to: "/privacy" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0B1D36",
        color: "#fff",
        pt: { xs: 3.5, md: 4 },
        pb: { xs: 2, md: 2.5 },
        mt: 0,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          left: { xs: -140, md: -70 },
          bottom: -160,
          background: "radial-gradient(circle, rgba(255,107,53,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.4fr 1fr 1fr 1fr",
            },
            gap: { xs: 2.5, md: 3 },
            mb: { xs: 2.5, md: 3 },
          }}
        >
          {/* Brand */}
          <Box sx={{ gridColumn: { xs: "1", sm: "1 / -1", md: "auto" }, maxWidth: 300 }}>
            <Box
              component="img"
              src="/images/white_newlogo.png"
              alt="VR TechWorld"
              width={225}
              height={64}
              sx={{
                width: { xs: 140, md: 150 },
                height: "auto",
                mb: 1.25,
                display: "block",
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.55,
                mb: 1.5,
              }}
            >
              Website design, branding, registration, and digital services that help your business look sharper.
            </Typography>
            <Box
              component="a"
              href="https://wa.me/919042238332"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "0.88rem",
                color: "#FF6B35",
                textDecoration: "none",
                transition: "gap 0.25s ease",
                "&:hover": { gap: 1.25 },
              }}
            >
              Start a project
              <ArrowOutward sx={{ fontSize: 16 }} />
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                mb: 1.25,
              }}
            >
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.85 }}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    width: "fit-content",
                    transition: "color 0.25s ease",
                    "&:hover": { color: "#FF6B35" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                mb: 1.25,
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.85 }}>
              <Typography
                component="a"
                href="tel:+919042238332"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  width: "fit-content",
                  transition: "color 0.25s ease",
                  "&:hover": { color: "#FF6B35" },
                }}
              >
                +91 90422 38332
              </Typography>
              <Typography
                component="a"
                href="mailto:vrtechworld19@gmail.com"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  width: "fit-content",
                  wordBreak: "break-word",
                  transition: "color 0.25s ease",
                  "&:hover": { color: "#FF6B35" },
                }}
              >
                vrtechworld19@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Connect */}
          <Box>
            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                mb: 1.25,
              }}
            >
              Connect
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Email" arrow>
                <IconButton
                  href="mailto:vrtechworld19@gmail.com"
                  aria-label="Email"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    transition: "background-color 0.25s ease, color 0.25s ease",
                    "&:hover": {
                      bgcolor: "#FF6B35",
                      color: "#fff",
                    },
                  }}
                >
                  <Email sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow>
                <IconButton
                  href="https://wa.me/919042238332"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    transition: "background-color 0.25s ease, color 0.25s ease",
                    "&:hover": {
                      bgcolor: "#FF6B35",
                      color: "#fff",
                    },
                  }}
                >
                  <WhatsApp sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            © {new Date().getFullYear()} VR TechWorld. All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Digital & business solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
