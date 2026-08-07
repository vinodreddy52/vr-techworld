import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Email, WhatsApp, Phone, ArrowForward } from "@mui/icons-material";
//import ThemeToggle from "../components/ThemeToggle";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      validationErrors.email = "Enter a valid email";
    if (!formData.message.trim())
      validationErrors.message = "Message cannot be empty";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const endpoint =
        process.env.REACT_APP_FORMSPREE_ENDPOINT ||
        "https://formspree.io/f/mrenjbwk"; // fallback to provided endpoint

      setLoading(true);

      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(async (res) => {
          setLoading(false);
          if (res.ok) {
            setSnackbar({ open: true, message: "Message sent successfully!", severity: "success" });
            setFormData(emptyForm);
            setErrors({});
          } else {
            const data = await res.json().catch(() => null);
            console.error("Formspree error:", data || res.statusText);
            setSnackbar({ open: true, message: "Failed to send message. Please try again later.", severity: "error" });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error("Formspree error:", err);
          setSnackbar({ open: true, message: "Failed to send message. Please try again later.", severity: "error" });
        });
    }
  };

  const fieldSx = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      fontFamily: '"Outfit", sans-serif',
      borderRadius: "8px",
      bgcolor: "var(--card-bg)",
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1F4068",
      },
    },
    "& .MuiInputLabel-root": {
      fontFamily: '"Outfit", sans-serif',
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1F4068",
    },
  };

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
      }}
    >
      {/* Header */}
      <Helmet>
        <title>Contact VR DIGITAL & CORPORATE HUB — Website, registration, and marketing help</title>
        <meta name="description" content="Contact VR DIGITAL & CORPORATE HUB for web design, branding, business registration, and digital marketing support." />
        <meta name="keywords" content="contact, website design, GST registration, MSME registration, SEO, digital marketing" />
        <link rel="canonical" href="%PUBLIC_URL%/contact" />
      </Helmet>
      <Box
        className="contact-fade-up"
        sx={{
          width: "100%",
          pt: { xs: 12, sm: 13, md: 14 },
          background: "linear-gradient(125deg, var(--appbar-bg) 0%, rgba(31,64,104,1) 100%)",
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 280,
              height: 280,
              borderRadius: "50%",
              right: -80,
              top: -100,
              background:
                "radial-gradient(circle, rgba(255,107,53,0.25) 0%, transparent 70%)",
            }}
          />
        </Box>

        <Helmet>
        <title>Contact VR DIGITAL & CORPORATE HUB — Website, registration, and digital services</title>
        <meta name="description" content="Contact VR DIGITAL & CORPORATE HUB for websites, branding, digital marketing, and business registration support." />
        <meta name="keywords" content="contact, website development, business registration, digital marketing, VR DIGITAL & CORPORATE HUB" />
        <link rel="canonical" href="%PUBLIC_URL%/contact" />
      </Helmet>
      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 3, md: 4 } }}>
          <Box sx={{ position: "absolute", top: 12, right: 12 }}>
            {/* <ThemeToggle /> */}
          </Box>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              mb: 1,
            }}
          >
            Contact
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              mb: 0.75,
            }}
          >
            Let’s build something sharp together
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.55,
              maxWidth: 520,
            }}
          >
            Website design, hosting, branding, ads, and business registration —
            tell us what you need.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 3, md: 4.5 },
          pb: { xs: 5, md: 6 },
        }}
      >
        <Box
          className="contact-fade-up contact-fade-up-delay"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
            gap: { xs: 2, md: 3 },
            alignItems: "stretch",
            width: "100%",
          }}
        >
          {/* Info panel */}
          <Box
            sx={{
                bgcolor: "var(--appbar-bg)",
                color: "#fff",
              borderRadius: "12px",
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                borderRadius: "50%",
                right: -60,
                bottom: -70,
                background:
                  "radial-gradient(circle, rgba(255,107,53,0.22) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1.2rem", md: "1.35rem" },
                mb: 1,
                position: "relative",
              }}
            >
              Get in touch
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "0.92rem",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.6,
                mb: 3.5,
                position: "relative",
              }}
            >
              Prefer a quick chat? Call or message us on WhatsApp — we usually
              reply fast.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                position: "relative",
                mb: 3.5,
              }}
            >
              <Box
                component="a"
                href="tel:+919042238332"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "color 0.25s ease",
                  "&:hover": { color: "#FF6B35" },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone sx={{ fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                      mb: 0.25,
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.98rem",
                    }}
                  >
                    +91 90422 38332
                  </Typography>
                </Box>
              </Box>

              <Box
                component="a"
                href="mailto:vrtechworld19@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "color 0.25s ease",
                  "&:hover": { color: "#FF6B35" },
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Email sx={{ fontSize: 20 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.45)",
                      mb: 0.25,
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      wordBreak: "break-word",
                    }}
                  >
                    vrtechworld19@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: "auto", position: "relative" }}>
                <Tooltip title="Email" arrow>
                <IconButton
                  href="mailto:vrtechworld19@gmail.com"
                  aria-label="Email"
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    "&:hover": { bgcolor: "var(--accent)", color: "#fff" },
                  }}
                >
                  <Email sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow>
                <IconButton
                  href="https://wa.me/919042238332"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "8px",
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    "&:hover": { bgcolor: "var(--accent)", color: "#fff" },
                  }}
                >
                  <WhatsApp sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Form panel */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(11, 29, 54, 0.08)",
              p: { xs: 2.5, sm: 3, md: 3.5 },
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1.15rem", md: "1.25rem" },
                color: "#0B1D36",
                mb: 0.75,
              }}
            >
              Send a message
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "0.9rem",
                color: "rgba(11, 29, 54, 0.58)",
                mb: 2.5,
                lineHeight: 1.5,
              }}
            >
              Fill in the form and we’ll get back to you soon.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={fieldSx}
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={fieldSx}
              />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ ...fieldSx, mb: 2.5 }}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={loading}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  textTransform: "none",
                  bgcolor: "var(--accent)",
                  color: "#fff",
                  py: 1.3,
                  borderRadius: "6px",
                  boxShadow: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  "&:hover": { bgcolor: "var(--accent-hover)", boxShadow: "none" },
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress color="inherit" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowForward />
                  </>
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            bgcolor: snackbar.severity === "success" ? "#1F4068" : undefined,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
