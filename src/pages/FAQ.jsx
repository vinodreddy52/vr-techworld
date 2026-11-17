import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Seo from "../components/Seo";
import { HOME_FAQS } from "../data/servicePages";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Extra questions so this page is not just a copy of the Home page FAQ.
// Keep answers general: exact rules and requirements depend on each business.
const MORE_FAQS = [
  {
    q: "Do you build websites for small businesses and startups?",
    a: "Yes. We design modern, mobile-friendly websites with SEO-ready structure and secure hosting, so small businesses and startups can launch quickly and look professional online.",
  },
  {
    q: "How much do your services cost?",
    a: "Every project is different, so we share a tailored quote once we understand what you need. Pricing plans are coming soon. Use the Contact page, WhatsApp or the chat to ask for a quote.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the service and how quickly documents or content are ready. After the first consultation we share a clear plan with timelines and milestones.",
  },
  {
    q: "Can you help my website show up on Google?",
    a: "Yes. We offer SEO and content strategy, including keyword research, on-page SEO and local search setup. No one can honestly guarantee a ranking position, but good SEO improves your visibility over time.",
  },
  {
    q: "Which documents are usually needed for GST or MSME registration?",
    a: "Usually PAN, Aadhaar, business address proof, bank account details and photographs. The exact list depends on your business, and our team confirms it before we start.",
  },
  {
    q: "Do you handle income tax and TDS filing?",
    a: "Yes. We support businesses and individuals with income tax and TDS return filing, including document preparation and timely submission.",
  },
  {
    q: "Can you help me register an LLP or a firm?",
    a: "Yes. We support LLP, firm and MSME registration. The right structure depends on the number of owners and your plans, and we explain the options in your consultation.",
  },
  {
    q: "Do you offer website maintenance and hosting?",
    a: "Yes. Our plans cover managed hosting, security updates, backups and uptime monitoring, so your website stays fast, secure and online.",
  },
  {
    q: "Can you set up an online store?",
    a: "Yes. We set up Shopify or WooCommerce stores, integrate a payment gateway and help you launch your first products.",
  },
  {
    q: "Can I talk to someone before I decide?",
    a: "Yes. You can book a free consultation through the chat on this website, message us on WhatsApp, or use the Contact page.",
  },
];

const ALL_FAQS = [...HOME_FAQS, ...MORE_FAQS];

export default function FAQ() {
  const [expanded, setExpanded] = useState([]);

  // Expand / collapse an individual FAQ
  const handleChange = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => setExpanded(ALL_FAQS.map((_, index) => index));
  const collapseAll = () => setExpanded([]);

  const linkButtonSx = {
    color: "#2563eb",
    fontWeight: 700,
    textTransform: "none",
    fontFamily: '"Outfit", sans-serif',
    "&:hover": { backgroundColor: "rgba(37,99,235,0.08)" },
  };

  return (
    <Box
      component="main"
      sx={{ overflowX: "hidden", width: "100%", bgcolor: "var(--surface)" }}
    >
      {/* SEO (Seo adds the "Home" breadcrumb itself, so it is not repeated here) */}
      <Seo
        title="Frequently Asked Questions | VR DIGITAL & CORPORATE HUB"
        description="Answers to common questions about website design, logo and branding, SEO, GST and MSME registration, income tax filing and digital marketing services."
        path="/faq"
        breadcrumb={[{ name: "FAQ", path: "/faq" }]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ALL_FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      {/* FAQ MAIN SECTION */}
      <Box
        component="section"
        sx={{
          pt: { xs: 12, sm: 13, md: 15 },
          pb: { xs: 6, sm: 7, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.85fr 1.5fr" },
              gap: { xs: 4, md: 7, lg: 9 },
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN */}
            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: 110 },
                pt: { md: 1 },
              }}
            >
              <Typography
                sx={{
                  color: "#2563eb",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: 13,
                  mb: 2,
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                HELP & SUPPORT
              </Typography>

              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "2.8rem", lg: "3rem" },
                  lineHeight: 1.2,
                  color: "var(--text)",
                  mb: 2.5,
                }}
              >
                Frequently Asked Questions
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  color: "var(--muted)",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Have questions about our services? Find answers to common
                questions about website development, branding, business
                registration, taxation and digital marketing.
              </Typography>

              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                sx={{
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  px: 3.5,
                  py: 1.3,
                  borderRadius: 2,
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(37,99,235,0.2)",
                  "&:hover": {
                    backgroundColor: "#1d4ed8",
                    boxShadow: "0 6px 16px rgba(37,99,235,0.25)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>

            {/* RIGHT COLUMN: FAQ ACCORDION */}
            <Box sx={{ width: "100%", minWidth: 0 }}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                sx={{ mb: 2, flexWrap: "wrap" }}
              >
                <Button size="small" onClick={expandAll} sx={linkButtonSx}>
                  Expand All
                </Button>
                <Button size="small" onClick={collapseAll} sx={linkButtonSx}>
                  Collapse All
                </Button>
              </Stack>

              {ALL_FAQS.map((f, index) => (
                <Accordion
                  key={f.q}
                  expanded={expanded.includes(index)}
                  onChange={() => handleChange(index)}
                  disableGutters
                  elevation={0}
                  sx={{
                    mb: 1.5,
                    border: "1px solid var(--card-border)",
                    borderRadius: "13px !important",
                    backgroundColor: "var(--card-bg)",
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                    "&:before": { display: "none" },
                    "&.Mui-expanded": {
                      borderColor: "#93b4f5",
                      backgroundColor: "rgba(37,99,235,0.05)",
                      boxShadow: "0 5px 18px rgba(37,99,235,0.05)",
                      my: 0,
                      mb: 1.5,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#2563eb", fontSize: 25 }} />}
                    sx={{
                      px: { xs: 2, sm: 2.5, md: 3 },
                      py: 0.8,
                      minHeight: 62,
                      "& .MuiAccordionSummary-content": { my: 1.5 },
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: "0.88rem", sm: "0.95rem", md: "1rem" },
                        color: "var(--text)",
                        lineHeight: 1.6,
                        pr: 1,
                      }}
                    >
                      {f.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{ px: { xs: 2, sm: 2.5, md: 3 }, pt: 0, pb: 2.5 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        color: "var(--muted)",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.9,
                      }}
                    >
                      {f.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}