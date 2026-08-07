import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
//import ThemeToggle from "../components/ThemeToggle";
import {
  Web,
  Brush,
  Campaign,
  Receipt,
  Assignment,
  Business,
  Work,
  ArrowForward,
  Close,
} from "@mui/icons-material";
import "./Service.css";

const services = [
  {
    icon: Web,
    title: "Website Design & Hosting",
    description:
      "Modern, mobile-friendly, SEO-ready websites with secure hosting for speed and uptime.",
    details:
      "Responsive websites designed for performance, accessibility, and fast delivery so your business can launch with confidence.",
  },
  {
    icon: Brush,
    title: "Logo Design",
    description:
      "Distinctive, high-resolution logos shaped around your brand identity and audience.",
    details:
      "Custom brand marks, color palettes, and style guides that make your business memorable across digital and print.",
  },
  {
    icon: Campaign,
    title: "Social Media & Google Ads",
    description:
      "Targeted Facebook, Instagram, and Google campaigns that grow reach and conversions.",
    details:
      "Ad strategy, creative assets, and conversion tracking that turn clicks into leads and measurable growth.",
  },
  {
    icon: Receipt,
    title: "Income Tax & TDS Return",
    description:
      "Accurate filing and compliance support for businesses and individuals.",
    details:
      "Professional filing, document preparation, and timely submission help you avoid penalties and stay compliant.",
  },
  {
    icon: Assignment,
    title: "GST & LLP Registration",
    description:
      "End-to-end GST and LLP registration handled with government compliance.",
    details:
      "From application to certificate, we manage the paperwork and follow-up so you can focus on your business.",
  },
  {
    icon: Business,
    title: "Firm & MSME Registration",
    description:
      "Legal setup for firms and MSMEs so you can unlock loans, exemptions, and subsidies.",
    details:
      "Legal registration, documentation, and government filings for startups, partnerships, and small businesses.",
  },
  {
    icon: Work,
    title: "ESI, PF & Labour Compliance",
    description:
      "Payroll-ready support for ESI, PF, and labour formalities your team needs.",
    details:
      "Compliance tracking and reporting for employee benefits, contributions, and labour law obligations.",
  },
  {
    icon: Web,
    title: "SEO & Content Strategy",
    description:
      "Keyword-focused SEO and content planning that helps your website rank and attract better traffic.",
    details:
      "On-page SEO, content audits, and local search optimization designed to improve visibility and lead quality.",
  },
  {
    icon: Business,
    title: "Maintenance & Hosting",
    description:
      "Managed hosting, security updates, backups, and uptime monitoring for worry-free websites.",
    details:
      "Reliable support, daily backups, SSL, and performance tuning to keep your site fast and secure.",
  },
  {
    icon: Campaign,
    title: "E-commerce Setup & Payments",
    description:
      "Shopify/WooCommerce store setup, payment gateway integration, and product launch support.",
    details:
      "Online store configuration, checkout flows, and payment integration so you can sell smoothly from day one.",
  },
];

const emptyForm = { name: "", email: "", mobile: "", message: "" };

const ctaButtonSx = {
  flex: "0 0 auto",
  alignSelf: { xs: "stretch", md: "center" },
  width: { xs: "100%", md: "auto" },
  maxWidth: "100%",
  fontFamily: '"Outfit", sans-serif',
  fontWeight: 600,
  textTransform: "none",
  bgcolor: "var(--accent)",
  color: "#fff",
  px: { xs: 2, sm: 2.5 },
  py: 1.25,
  borderRadius: "6px",
  boxShadow: "none",
  whiteSpace: "nowrap",
  "&:hover": {
    bgcolor: "var(--accent-hover)",
    boxShadow: "none",
  },
};

const Services = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleOpen = (serviceTitle = "") => {
    setSelectedService(serviceTitle);
    setFormData({
      ...emptyForm,
      message: serviceTitle ? `I'm interested in ${serviceTitle}.` : "",
    });
    setErrors({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrors({});
    setFormData(emptyForm);
    setSelectedService("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      validationErrors.email = "Enter a valid email";
    if (!formData.mobile.trim() || !validateMobile(formData.mobile))
      validationErrors.mobile = "Enter a valid 10-digit mobile number";
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
            handleClose();
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
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1F4068",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1F4068",
    },
  };

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
      }}
    >
      <Box
        component="section"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "100%",
          pb: 0,
          boxSizing: "border-box",
        }}
      >
        <Helmet>
          <title>Services — VR DIGITAL & CORPORATE HUB</title>
          <meta name="description" content="Explore VR DIGITAL & CORPORATE HUB services: website design, registration, SEO, hosting, ads, and compliance support." />
          <meta name="keywords" content="website design, SEO, business registration, GST, MSME, hosting, digital marketing" />
          <link rel="canonical" href="%PUBLIC_URL%/service" />
        </Helmet>
        {/* Header — full-bleed bg, constrained content */}
        <Box
          className="service-fade-up"
          sx={{
            width: "100%",
            maxWidth: "100%",
            pt: { xs: 11, sm: 12, md: 12 },
            background: "linear-gradient(125deg, var(--appbar-bg) 0%, rgba(31,64,104,1) 100%)",
            color: "#fff",
            position: "relative",
            boxSizing: "border-box",
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

          <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 3, md: 4 } }}>
            <Box sx={{ position: "absolute", top: 12, right: 12 }}>
              {/* <ThemeToggle /> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "stretch", md: "center" },
                justifyContent: "space-between",
                gap: { xs: 2, md: 3 },
                width: "100%",
              }}
            >
              <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
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
                  Our Services
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.85rem" },
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    mb: 0.75,
                  }}
                >
                  Digital & business solutions
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: "0.88rem", md: "0.95rem" },
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.6,
                    maxWidth: 640,
                  }}
                >
                  From fast-loading websites and branding to registration, compliance, and growth campaigns, we help startups, SMEs, and service businesses move forward with fewer delays and stronger results.
                </Typography>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => handleOpen()}
                sx={ctaButtonSx}
              >
                Free Consultation
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Service grid */}
        <Container
          maxWidth="lg"
          sx={{
            flex: 1,
            width: "100%",
            py: { xs: 2.5, md: 3 },
            boxSizing: "border-box",
          }}
        >
          <Box
            className="service-fade-up"
            sx={{
              bgcolor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "16px",
              p: { xs: 2.25, md: 3 },
              mb: { xs: 2.5, md: 3 },
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.15rem" },
                mb: 1,
              }}
            >
              Built for business owners who need reliable support
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: { xs: "0.92rem", md: "0.97rem" },
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              We combine website performance, search visibility, legal setup, and digital growth planning into one practical service experience so clients can focus on running the business rather than juggling separate vendors.
            </Typography>
          </Box>

          <Box
            className="service-fade-up service-fade-up-delay-1"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              },
              gap: { xs: 1.5, md: 1.75 },
              alignContent: "start",
            }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Box
                  key={service.title}
                  className="service-row"
                  onClick={() => handleOpen(service.title)}
                  sx={{
                    cursor: "pointer",
                    bgcolor: "var(--card-bg)",
                    borderRadius: "10px",
                    p: { xs: 2, md: 2.5 },
                    border: "1px solid var(--card-border)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 1.25,
                    minHeight: { xs: "auto", md: 210 },
                    width: "100%",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    transition:
                      "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                    "&:hover": {
                      borderColor: "var(--accent)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      transform: "translateY(-3px)",
                    },
                    "&:hover .service-icon-wrap": {
                      bgcolor: "rgba(255, 107, 53, 0.12)",
                      color: "var(--accent)",
                    },
                    "&:hover .service-title": { color: "var(--accent)" },
                    "&:hover .service-enquire": { opacity: 1 },
                  }}
                >
                  <Box
                    className="service-icon-wrap"
                    sx={{
                      width: { xs: 68, md: 76 },
                      height: { xs: 68, md: 76 },
                      borderRadius: "16px",
                      bgcolor: "var(--surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--appbar-bg)",
                      transition:
                        "background-color 0.25s ease, color 0.25s ease",
                      mb: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: 36, md: 40 } }} />
                  </Box>

                  <Typography
                    className="service-title"
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "var(--text)",
                      lineHeight: 1.3,
                      transition: "color 0.25s ease",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "0.82rem",
                      color: "rgba(11, 29, 54, 0.58)",
                      lineHeight: 1.45,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Typography
                    className="service-enquire"
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0.5,
                      opacity: 0.75,
                      transition: "opacity 0.25s ease",
                      mt: "auto",
                    }}
                  >
                    Enquire
                    <ArrowForward sx={{ fontSize: 14 }} />
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ width: "100%", py: { xs: 4, md: 5 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {[
              {
                title: "Launch quickly",
                description:
                  "Website and business registration services that help you start faster with fewer delays, cleaner paperwork, and a stronger first impression.",
              },
              {
                title: "Grow with clarity",
                description:
                  "Digital campaigns, SEO, and performance-focused strategies that make your next step measurable, visible, and effective.",
              },
              {
                title: "Stay supported",
                description:
                  "Maintenance, compliance, and hosting plans so your business keeps running smoothly with less stress and better uptime.",
              },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "14px",
                  p: { xs: 3, md: 3.5 },
                  minHeight: 170,
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
                    fontSize: "0.95rem",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>

        {/* CTA — full-bleed bg, constrained content */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            mt: "auto",
            background: "linear-gradient(145deg, #0B1D36 0%, #1F4068 100%)",
            color: "#fff",
            position: "relative",
            boxSizing: "border-box",
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
                width: 260,
                height: 260,
                borderRadius: "50%",
                left: -80,
                bottom: -120,
                background:
                  "radial-gradient(circle, rgba(255,107,53,0.2) 0%, transparent 70%)",
              }}
            />
          </Box>

          <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 3, md: 4 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "stretch", md: "center" },
                justifyContent: "space-between",
                gap: { xs: 2, md: 3 },
                width: "100%",
              }}
            >
              <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: "1.15rem", sm: "1.25rem", md: "1.4rem" },
                    lineHeight: 1.25,
                    mb: 0.75,
                  }}
                >
                  Not sure what you need?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: "0.88rem", md: "0.95rem" },
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.5,
                  }}
                >
                  We’ll recommend the right path for your business.
                </Typography>
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => handleOpen()}
                sx={ctaButtonSx}
              >
                Talk to Us
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Consultation dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        fullScreen={false}
        PaperProps={{
          sx: {
            borderRadius: { xs: "10px", sm: "12px" },
            overflow: "hidden",
            m: { xs: 2, sm: 3 },
            width: { xs: "calc(100% - 32px)", sm: "100%" },
            maxHeight: { xs: "90vh", sm: "85vh" },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700,
            color: "var(--text)",
            pr: 6,
            pt: 2.5,
            pb: 1,
          }}
        >
          Get a Free Consultation
          <IconButton
            onClick={handleClose}
            aria-label="Close"
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "var(--muted)",
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            p: 3,
            overflowY: "auto",
            maxHeight: "70vh",
            borderColor: "rgba(11, 29, 54, 0.08)",
          }}
        >
          {selectedService && (
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                }}
              >
                About: {selectedService}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "0.9rem",
                  color: "rgba(11, 29, 54, 0.72)",
                  lineHeight: 1.6,
                  mt: 1,
                }}
              >
                {services.find((item) => item.title === selectedService)?.details}
              </Typography>
            </Box>
          )}
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
              label="Mobile Number"
              fullWidth
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  setFormData({ ...formData, mobile: value });
                }
              }}
              error={!!errors.mobile}
              helperText={errors.mobile}
              sx={fieldSx}
            />
            <TextField
              label="Your Message"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ ...fieldSx, mb: 1 }}
            />
            <DialogActions
              sx={{
                px: 0,
                pt: 2,
                gap: 1,
                flexDirection: { xs: "column-reverse", sm: "row" },
                "& > :not(style)": {
                  width: { xs: "100%", sm: "auto" },
                  m: { xs: "0 !important", sm: undefined },
                },
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  textTransform: "none",
                  color: "rgba(11, 29, 54, 0.65)",
                  borderRadius: "6px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 600,
                  textTransform: "none",
                  bgcolor: "var(--accent)",
                  borderRadius: "6px",
                  px: 3,
                  boxShadow: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    bgcolor: "var(--accent-hover)",
                    boxShadow: "none",
                  },
                }}
              >
                {loading ? (
                  <>
                    <CircularProgress color="inherit" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
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
          sx={{ fontFamily: '"Outfit", sans-serif' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Services;
