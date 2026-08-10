import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Check, ArrowForward, Close } from "@mui/icons-material";
import "./Pricing.css";
//import ThemeToggle from "../components/ThemeToggle";

// Set to true when you want to show pricing plans again
const SHOW_PRICING_PLANS = false;

const pricingPlans = [
  {
    title: "Basic",
    price: "₹3,500",
    period: "one-time",
    description: "Ideal for individuals and small businesses starting online.",
    features: [
      "1 Website",
      "5 Static Web Pages",
      "Basic Support",
      "Mobile-Friendly Design",
      "SEO-Optimized Structure",
      "Fast Loading Speed",
      "Domain Setup Assistance",
      "Basic Website Analytics",
    ],
  },
  {
    title: "Pro",
    price: "₹7,500",
    period: "one-time",
    description: "Best value for growing businesses that need more power.",
    features: [
      "1 Website",
      "10 Static Web Pages",
      "Priority Support",
      "Free SSL Certificate",
      "Custom Domain Integration",
      "SEO Optimization",
      "Performance Monitoring",
      "Custom Contact Forms",
      "Google Analytics Integration",
      "Social Media Integration",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "₹15,000",
    period: "one-time",
    description: "Scalable solutions with dedicated support for bigger teams.",
    features: [
      "2 Websites",
      "Custom Web Pages",
      "Dedicated Support 24/7",
      "Free SSL Certificate",
      "Custom Domain Integration",
      "Advanced Security Features",
      "Cloud Hosting",
      "Dedicated Account Manager",
      "Performance Optimization",
    ],
  },
];

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlan(null);
  };

  const handleProceed = () => {
    if (!selectedPlan) return;
    const message = encodeURIComponent(
      `Hi VR DIGITAL & CORPORATE HUB, I'm interested in the ${selectedPlan.title} plan (${selectedPlan.price}).`
    );
    window.open(`https://wa.me/919042238332?text=${message}`, "_blank");
    handleClose();
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
      <Helmet>
        <title>Pricing — VR DIGITAL & CORPORATE HUB</title>
        <meta name="description" content="Request pricing from VR DIGITAL & CORPORATE HUB for websites, branding, SEO, business registration, and digital growth services." />
        <meta name="keywords" content="pricing, website packages, business registration pricing, SEO plans, hosting costs, branding packages" />
        <link rel="canonical" href="https://vrdigitalcorporate.netlify.app/pricing" />
      </Helmet>

      {/* Header */}
      <Box
        className="pricing-fade-up"
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
            Pricing
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
            {SHOW_PRICING_PLANS
              ? "Simple plans that grow with you"
              : "Pricing plans coming soon"}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.6,
              maxWidth: 620,
            }}
          >
            {SHOW_PRICING_PLANS
              ? "Choose a package that fits your business — clear pricing, practical features, and no unnecessary extras."
              : "We customize quotes for websites, SEO, hosting, branding, and registration support so every client gets a plan that matches their goals."}
          </Typography>
        </Container>
      </Box>

      {/* Plans or Coming Soon */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 3, md: 4.5 },
          pb: { xs: 5, md: 6 },
        }}
      >
        {!SHOW_PRICING_PLANS ? (
          <Box
            className="pricing-fade-up pricing-fade-up-delay"
            sx={{
              bgcolor: "var(--card-bg)",
              borderRadius: "12px",
              border: "1px solid var(--card-border)",
              px: { xs: 2.5, sm: 3, md: 5 },
              py: { xs: 4, md: 7 },
              textAlign: "center",
              maxWidth: 640,
              mx: "auto",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
                sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                  color: "var(--accent)",
                mb: 1.5,
              }}
            >
              Coming Soon
            </Typography>
            <Typography
                sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "1.85rem" },
                  color: "var(--text)",
                letterSpacing: "-0.02em",
                mb: 1.5,
              }}
            >
              New pricing will be live shortly
            </Typography>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  mb: 3.5,
                  maxWidth: 440,
                  mx: "auto",
                }}
              >
              Meanwhile, tell us what you need and we’ll share a tailored quote for
              your website, business setup, SEO, or digital growth project.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              href="https://wa.me/919042238332?text=Hi%20VR%20DIGITAL%20&%20CORPORATE%20HUB%2C%20I%27d%20like%20a%20custom%20pricing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "var(--accent)",
                color: "#fff",
                px: 3,
                py: 1.25,
                borderRadius: "6px",
                boxShadow: "none",
                width: { xs: "100%", sm: "auto" },
                maxWidth: { xs: "100%", sm: 280 },
                "&:hover": {
                  bgcolor: "var(--accent-hover)",
                  boxShadow: "none",
                },
              }}
            >
              Get a Custom Quote
            </Button>
          </Box>
        ) : (
          <Box
            className="pricing-fade-up pricing-fade-up-delay"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, md: 2.5 },
              alignItems: "stretch",
            }}
          >
            {pricingPlans.map((plan) => (
              <Box
                key={plan.title}
                className="pricing-card"
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: plan.highlight ? "var(--appbar-bg)" : "var(--card-bg)",
                  color: plan.highlight ? "#fff" : "var(--text)",
                  borderRadius: "12px",
                  border: plan.highlight
                    ? "1px solid var(--appbar-bg)"
                    : "1px solid var(--card-border)",
                  p: { xs: 2.5, md: 3 },
                  pt: plan.highlight ? { xs: 3.5, md: 4 } : { xs: 2.5, md: 3 },
                  boxShadow: plan.highlight
                    ? "0 16px 40px rgba(11, 29, 54, 0.22)"
                    : "none",
                  transform: {
                    xs: "none",
                    md: plan.highlight ? "translateY(-6px)" : "none",
                  },
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": {
                    transform: {
                      xs: "none",
                      sm: "translateY(-3px)",
                      md: plan.highlight
                        ? "translateY(-10px)"
                        : "translateY(-4px)",
                    },
                    boxShadow: plan.highlight
                      ? "0 20px 48px rgba(0,0,0,0.28)"
                      : "0 10px 28px rgba(0,0,0,0.08)",
                    borderColor: plan.highlight
                      ? "var(--appbar-bg)"
                      : "var(--accent)",
                  },
                }}
              >
                {plan.highlight && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      bgcolor: "var(--accent)",
                      color: "#fff",
                      px: 1.25,
                      py: 0.4,
                      borderRadius: "4px",
                    }}
                  >
                    Most Popular
                  </Box>
                )}

                <Typography
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    mb: 0.75,
                  }}
                >
                  {plan.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.88rem",
                    color: plan.highlight
                      ? "rgba(255,255,255,0.68)"
                      : "rgba(11, 29, 54, 0.6)",
                    lineHeight: 1.5,
                    mb: 2.5,
                    minHeight: { md: 42 },
                  }}
                >
                  {plan.description}
                </Typography>

                <Box sx={{ mb: 2.5 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 800,
                      fontSize: { xs: "2rem", md: "2.15rem" },
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: plan.highlight ? "#FF6B35" : "#0B1D36",
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "0.8rem",
                      mt: 0.5,
                      color: plan.highlight
                        ? "rgba(255,255,255,0.5)"
                        : "rgba(11, 29, 54, 0.45)",
                    }}
                  >
                    {plan.period}
                  </Typography>
                </Box>

                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    m: 0,
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.1,
                    flex: 1,
                    mb: 3,
                  }}
                >
                  {plan.features.map((feature) => (
                    <Box
                      component="li"
                      key={feature}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "0.88rem",
                        lineHeight: 1.4,
                        color: plan.highlight
                          ? "rgba(255,255,255,0.85)"
                          : "rgba(11, 29, 54, 0.75)",
                      }}
                    >
                      <Check
                        sx={{
                          fontSize: 18,
                          mt: "1px",
                          color: plan.highlight ? "#FF6B35" : "#1F4068",
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<ArrowForward />}
                  onClick={() => handleChoosePlan(plan)}
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontWeight: 600,
                    textTransform: "none",
                    mt: "auto",
                    py: 1.2,
                    borderRadius: "6px",
                    boxShadow: "none",
                    bgcolor: plan.highlight ? "#FF6B35" : "#1F4068",
                    color: "#fff",
                    "&:hover": {
                      bgcolor: plan.highlight ? "#E85A28" : "#0B1D36",
                      boxShadow: "none",
                    },
                  }}
                >
                  Choose Plan
                </Button>
              </Box>
            ))}
          </Box>
        )}
      </Container>

      {/* Confirm dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: "10px", sm: "12px" },
            overflow: "hidden",
            m: { xs: 2, sm: 3 },
            width: { xs: "calc(100% - 32px)", sm: "100%" },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700,
            color: "#0B1D36",
            pr: 6,
            pt: 2.5,
            pb: 1,
          }}
        >
          Confirm your plan
          <IconButton
            onClick={handleClose}
            aria-label="Close"
            sx={{
              position: "absolute",
              right: 12,
              top: 12,
              color: "rgba(11, 29, 54, 0.5)",
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 1, pb: 1 }}>
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              color: "rgba(11, 29, 54, 0.7)",
              mb: 2,
            }}
          >
            You selected the{" "}
            <Box component="strong" sx={{ color: "#0B1D36" }}>
              {selectedPlan?.title}
            </Box>{" "}
            plan.
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: "1.75rem",
              color: "#FF6B35",
            }}
          >
            {selectedPlan?.price}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            px: 3,
            pb: 2.5,
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
            variant="contained"
            onClick={handleProceed}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#FF6B35",
              borderRadius: "6px",
              px: 2.5,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#E85A28",
                boxShadow: "none",
              },
            }}
          >
            Continue on WhatsApp
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Pricing;
