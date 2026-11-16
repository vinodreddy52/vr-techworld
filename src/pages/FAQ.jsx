
import React, { useState } from "react";
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

export default function FAQ() {
  const [expanded, setExpanded] = useState([]);

  // Expand / Collapse individual FAQ
  const handleChange = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Expand all FAQs
  const expandAll = () => {
    setExpanded(HOME_FAQS.map((_, index) => index));
  };

  // Collapse all FAQs
  const collapseAll = () => {
    setExpanded([]);
  };

  return (
    <Box>
      {/* SEO */}
      <Seo
        title="Frequently Asked Questions | VR DIGITAL & CORPORATE HUB"
        description="Find answers to common questions about website development, logo design, branding, SEO, GST registration, MSME registration, ITR and digital marketing services."
        path="/faq"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          },
        ]}
      />

      {/* FAQ MAIN SECTION */}
      <Box
        component="section"
        sx={{
          background: "#f7fbff",
          py: { xs: 6, sm: 7, md: 10 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.5fr",
              },
              gap: {
                xs: 4,
                md: 7,
                lg: 9,
              },
              alignItems: "start",
            }}
          >
            {/* LEFT COLUMN */}
            <Box
              sx={{
                position: {
                  md: "sticky",
                },
                top: {
                  md: 110,
                },
                pt: { md: 1 },
              }}
            >
              {/* Eyebrow */}
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

              {/* Heading */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 800,
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "2.8rem",
                    lg: "3rem",
                  },
                  lineHeight: 1.2,
                  color: "#14213d",
                  mb: 2.5,
                }}
              >
                Frequently Asked Questions
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  color: "#64748b",
                  fontSize: {
                    xs: "0.95rem",
                    md: "1rem",
                  },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Have questions about our services? Find answers
                to common questions about website development,
                branding, business registration, taxation and
                digital marketing.
              </Typography>

              {/* Contact Button */}
              <Button
                href="/contact"
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

            {/* RIGHT COLUMN - FAQ ACCORDION */}
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
              }}
            >
              {/* Expand / Collapse Controls */}
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                sx={{
                  mb: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  size="small"
                  onClick={expandAll}
                  sx={{
                    color: "#2563eb",
                    fontWeight: 700,
                    textTransform: "none",
                    fontFamily: '"Outfit", sans-serif',
                    "&:hover": {
                      backgroundColor: "#eaf2ff",
                    },
                  }}
                >
                  Expand All
                </Button>

                <Button
                  size="small"
                  onClick={collapseAll}
                  sx={{
                    color: "#2563eb",
                    fontWeight: 700,
                    textTransform: "none",
                    fontFamily: '"Outfit", sans-serif',
                    "&:hover": {
                      backgroundColor: "#eaf2ff",
                    },
                  }}
                >
                  Collapse All
                </Button>
              </Stack>

              {/* FAQ Items */}
              {HOME_FAQS.map((f, index) => (
                <Accordion
                  key={index}
                  expanded={expanded.includes(index)}
                  onChange={() => handleChange(index)}
                  disableGutters
                  elevation={0}
                  sx={{
                    mb: 1.5,
                    border: "1px solid #e2eaf3",
                    borderRadius: "13px !important",
                    backgroundColor: "#ffffff",
                    overflow: "hidden",
                    transition: "all 0.25s ease",

                    "&:before": {
                      display: "none",
                    },

                    "&.Mui-expanded": {
                      borderColor: "#c5d9f8",
                      backgroundColor: "#f0f6ff",
                      boxShadow:
                        "0 5px 18px rgba(37,99,235,0.05)",
                      my: 0,
                      mb: 1.5,
                    },
                  }}
                >
                  {/* Question */}
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#2563eb",
                          fontSize: 25,
                        }}
                      />
                    }
                    sx={{
                      px: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },
                      py: 0.8,
                      minHeight: 62,

                      "& .MuiAccordionSummary-content": {
                        my: 1.5,
                      },
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontFamily: '"Syne", sans-serif',
                        fontWeight: 700,
                        fontSize: {
                          xs: "0.88rem",
                          sm: "0.95rem",
                          md: "1rem",
                        },
                        color: "#1e293b",
                        lineHeight: 1.6,
                        pr: 1,
                      }}
                    >
                      {f.q}
                    </Typography>
                  </AccordionSummary>

                  {/* Answer */}
                  <AccordionDetails
                    sx={{
                      px: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },
                      pt: 0,
                      pb: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        color: "#64748b",
                        fontSize: {
                          xs: "0.9rem",
                          md: "0.95rem",
                        },
                        lineHeight: 1.9,
                      }}
                    >
                      {f.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}

              {/* Empty FAQ Fallback */}
              {HOME_FAQS.length === 0 && (
                <Typography
                  sx={{
                    color: "#64748b",
                    textAlign: "center",
                    py: 5,
                    fontFamily: '"Outfit", sans-serif',
                  }}
                >
                  No FAQs available at the moment.
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
