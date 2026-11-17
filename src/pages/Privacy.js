
import React, { useState } from "react";
import Seo from "../components/Seo";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Paper,
  Divider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PRIVACY_SECTIONS = [
  {
    title: "Information We Collect",
    content: [
      "We may collect personal and business information that you voluntarily provide when contacting us, requesting a quotation, submitting an inquiry or using our services.",
      "This may include your name, email address, mobile number, business name, business details, communication history and documents you choose to share.",
      "We may also collect basic technical information such as browser type, device information, IP address and website usage data, where applicable.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use collected information for legitimate business and service-related purposes, including:",
      "• Responding to customer inquiries and requests.",
      "• Providing website development, branding and digital marketing services.",
      "• Assisting with GST, MSME, ITR and TDS-related services.",
      "• Preparing quotations and communicating project updates.",
      "• Improving website functionality and service quality.",
      "• Meeting applicable legal and regulatory obligations.",
    ],
  },
  {
    title: "Business Documents and Information",
    content: [
      "For certain business and compliance-related services, you may voluntarily share documents or information required to complete your requested work.",
      "We use such information only for the relevant service purpose and restrict access to individuals or service providers who need it to perform that work.",
      "Please avoid sharing passwords, OTPs, banking credentials or other confidential authentication details through ordinary contact forms or email.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell your personal information to third parties.",
      "We may share relevant information with authorized service providers, hosting providers, technology partners or professional associates where necessary to deliver your requested services.",
      "Information may also be disclosed when required by applicable law or a valid legal request.",
    ],
  },
  {
    title: "Cookies and Analytics",
    content: [
      "Our website may use cookies or similar technologies to support website functionality, remember preferences and understand visitor interactions.",
      "Where analytics tools are implemented, they may collect technical and usage information to help us improve website performance and user experience.",
      "You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We take reasonable measures appropriate to the information we handle to protect personal and business information against unauthorized access, misuse, alteration or disclosure.",
      "However, no electronic transmission or storage method can be guaranteed to be completely secure.",
      "We encourage users to share information only through appropriate communication channels.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain personal and business information only for as long as reasonably necessary to provide requested services, maintain business records, resolve disputes and meet applicable legal or regulatory requirements.",
      "When information is no longer required, we take appropriate steps to delete it or otherwise dispose of it, subject to applicable retention obligations.",
    ],
  },
  {
    title: "Your Privacy Rights",
    content: [
      "Depending on applicable law, you may request access to, correction of or deletion of personal information that you have shared with us.",
      "Where processing is based on consent, you may request to withdraw that consent, subject to applicable legal requirements and the consequences for the requested service.",
      "We may need to verify your identity before processing a privacy-related request.",
    ],
  },
  {
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites, platforms or services.",
      "These external websites operate under their own privacy policies. We are not responsible for their content, security or data-handling practices.",
      "We encourage you to review their privacy policies before sharing personal information.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Our website and business services are intended for individuals and organizations seeking professional digital and business support.",
      "We do not knowingly request personal information directly from children through our website. If you believe a child has submitted personal information to us, please contact us.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, business practices or applicable legal requirements.",
      "Updated versions will be published on this page with a revised last-updated date.",
      "We encourage visitors to review this page periodically.",
    ],
  },
];

const Privacy = () => {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (index) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <Box
      component="main"
      sx={{
        overflowX: "hidden",
        width: "100%",
        bgcolor: "var(--surface)",
        minHeight: "100vh",
        boxSizing: "border-box",
        pt: { xs: 11, sm: 12, md: 13 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <Seo
        title="Privacy Policy | VR DIGITAL & CORPORATE HUB"
        description="Read the privacy policy of VR DIGITAL & CORPORATE HUB to understand how we collect, use and protect personal and business information."
        path="/privacy"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />

      <Container maxWidth="lg">

        {/* COMPACT HEADER */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 750,
            mx: "auto",
            mb: { xs: 3.5, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: "14px",
              bgcolor: "rgba(37,99,235,0.10)",
              mb: 1.5,
            }}
          >
            <ShieldOutlinedIcon
              sx={{ color: "#2563eb", fontSize: 28 }}
            />
          </Box>

          <Typography
            sx={{
              color: "#2563eb",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 2,
              mb: 1,
              fontFamily: '"Outfit", sans-serif',
            }}
          >
            YOUR PRIVACY MATTERS
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: {
                xs: "1.9rem",
                sm: "2.4rem",
                md: "2.8rem",
              },
              lineHeight: 1.2,
              color: "var(--text)",
              mb: 1.5,
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              color: "var(--muted)",
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.8,
            }}
          >
            Your trust is important to us. Learn how we collect,
            use and protect your personal and business information
            when you interact with our website and services.
          </Typography>

          {/* <Typography
            sx={{
              color: "var(--muted)",
              fontSize: "0.78rem",
              mt: 1.5,
              fontFamily: '"Outfit", sans-serif',
            }}
          >
            Last Updated: 16 November 2026
          </Typography> */}
        </Box>

        {/* PRIVACY HIGHLIGHTS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, minmax(0, 1fr))",
            },
            gap: 1.5,
            mb: 4,
          }}
        >
          {[
            {
              icon: <SecurityOutlinedIcon />,
              title: "Data Protection",
              desc: "Reasonable measures to protect your information.",
            },
            {
              icon: <VerifiedUserOutlinedIcon />,
              title: "Responsible Usage",
              desc: "Information used for relevant service purposes.",
            },
            {
              icon: <ShieldOutlinedIcon />,
              title: "Your Privacy",
              desc: "We do not sell your personal information.",
            },
          ].map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 2,
                border: "1px solid var(--border)",
                borderRadius: 2.5,
                bgcolor: "var(--surface)",
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  flexShrink: 0,
                  borderRadius: 2,
                  bgcolor: "rgba(37,99,235,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563eb",
                  "& svg": { fontSize: 23 },
                }}
              >
                {item.icon}
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    color: "var(--text)",
                    fontSize: "0.9rem",
                    mb: 0.3,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    color: "var(--muted)",
                    fontSize: "0.77rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* POLICY CONTENT */}
        <Paper
          elevation={0}
          sx={{
            border: "1px solid var(--border)",
            borderRadius: { xs: 2, md: 3 },
            bgcolor: "var(--surface)",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* INTRODUCTION */}
          <Box sx={{ mb: 3 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                color: "var(--text)",
                fontSize: "1.15rem",
                mb: 1,
              }}
            >
              Introduction
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              VR DIGITAL & CORPORATE HUB respects your privacy
              and is committed to handling personal and business
              information responsibly. This policy explains what
              information we collect, how we use it and the choices
              available to you when using our website and services.
            </Typography>
          </Box>

          <Divider sx={{ mb: 2.5, borderColor: "var(--border)" }} />

          {/* ACCORDION HEADER */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={1}
            sx={{ mb: 2 }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                fontSize: "1.15rem",
                color: "var(--text)",
              }}
            >
              Privacy Details
            </Typography>

            <Typography
              sx={{
                color: "var(--muted)",
                fontSize: "0.78rem",
                fontFamily: '"Outfit", sans-serif',
              }}
            >
              Select a section to read more
            </Typography>
          </Stack>

          {/* TWO COLUMN ACCORDIONS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
              },
              gap: 1.5,
              alignItems: "start",
            }}
          >
            {PRIVACY_SECTIONS.map((section, index) => (
              <Accordion
                key={index}
                expanded={expanded.includes(index)}
                onChange={() => handleChange(index)}
                disableGutters
                elevation={0}
                sx={{
                  width: "100%",
                  border: "1px solid var(--border)",
                  borderRadius: "10px !important",
                  bgcolor: "var(--surface)",
                  overflow: "hidden",

                  "&:before": {
                    display: "none",
                  },

                  "&.Mui-expanded": {
                    borderColor: "#93b4f5",
                    bgcolor: "rgba(37,99,235,0.035)",
                    my: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#2563eb" }}
                    />
                  }
                  sx={{
                    px: { xs: 1.8, md: 2 },
                    minHeight: 58,

                    "& .MuiAccordionSummary-content": {
                      my: 1.2,
                    },
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      fontSize: {
                        xs: "0.88rem",
                        md: "0.91rem",
                      },
                      color: "var(--text)",
                      lineHeight: 1.5,
                      pr: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}.{" "}
                    {section.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: { xs: 1.8, md: 2 },
                    pt: 0,
                    pb: 2,
                  }}
                >
                  {section.content.map((paragraph, pIndex) => (
                    <Typography
                      key={pIndex}
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        color: "var(--muted)",
                        fontSize: "0.87rem",
                        lineHeight: 1.8,
                        mb: 1.2,
                        whiteSpace: "pre-line",
                        "&:last-child": {
                          mb: 0,
                        },
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* CONTACT INFORMATION */}
          <Box
            sx={{
              mt: 3,
              p: { xs: 2.5, md: 3 },
              borderRadius: 2.5,
              bgcolor: "#14213d",
              color: "#fff",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              justifyContent: "space-between",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              gap: 2,
            }}
          >
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  mb: 0.8,
                }}
              >
                Have Privacy Questions?
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  color: "#cbd5e1",
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                }}
              >
                Contact our team for privacy-related requests
                or additional information.
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#93c5fd",
                  fontSize: "0.85rem",
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                vrtechworld19@gmail.com
              </Typography>
            </Box>

            <Button
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                flexShrink: 0,
                bgcolor: "#2563eb",
                color: "#fff",
                px: 2.5,
                py: 1.1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#1d4ed8",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Paper>

        {/* FOOTER NOTE */}
        <Typography
          sx={{
            textAlign: "center",
            color: "var(--muted)",
            fontFamily: '"Outfit", sans-serif',
            fontSize: "0.78rem",
            mt: 3,
          }}
        >
          © VR DIGITAL & CORPORATE HUB. Your privacy matters to us.
        </Typography>

      </Container>
    </Box>
  );
};

export default Privacy;
