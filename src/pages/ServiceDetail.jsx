import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { SERVICE_PAGES } from "../data/servicePages";

const font = { fontFamily: '"Outfit", sans-serif' };
const heading = { fontFamily: '"Syne", sans-serif' };

const List = ({ items, icon }) => (
  <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 2, display: "grid", gap: 0.9 }}>
    {items.map((item) => (
      <Box component="li" key={item} sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
        {icon ? (
          <CheckCircle sx={{ fontSize: 18, color: "var(--accent)", mt: "2px", flexShrink: 0 }} />
        ) : (
          <Box component="span" sx={{ color: "var(--accent)", fontWeight: 700, lineHeight: 1.6 }}>•</Box>
        )}
        <Typography sx={{ ...font, fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.6 }}>
          {item}
        </Typography>
      </Box>
    ))}
  </Box>
);

// Visible, crawlable text for every service (the pop-up on the cards is not visible to Google).
// Each article has an id so links like /service#gst-llp-registration jump to it.
const ServiceDetails = () => (
  <Box
    component="section"
    aria-labelledby="service-details-heading"
    sx={{ width: "100%", bgcolor: "var(--surface)", py: { xs: 4, md: 6 } }}
  >
    <Container maxWidth="lg">
      <Typography
        id="service-details-heading"
        component="h2"
        sx={{ ...heading, fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" }, color: "var(--text)", mb: 1 }}
      >
        Our services in detail
      </Typography>
      <Typography sx={{ ...font, color: "var(--muted)", lineHeight: 1.7, maxWidth: 760, mb: 3 }}>
        Here is what each service includes and what we usually need from you to get started.
        Our team confirms the exact requirements for your business.
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 2, md: 2.5 } }}>
        {SERVICE_PAGES.map((p) => (
          <Box
            component="article"
            id={p.slug}
            key={p.slug}
            sx={{
              scrollMarginTop: "90px",
              bgcolor: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "14px",
              p: { xs: 2.5, md: 3 },
            }}
          >
            <Typography component="h3" sx={{ ...heading, fontWeight: 700, fontSize: "1.15rem", color: "var(--text)", mb: 1 }}>
              {p.cardTitle}
            </Typography>
            <Typography sx={{ ...font, fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7, mb: 2 }}>
              {p.intro}
            </Typography>
            <Typography component="h4" sx={{ ...heading, fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", mb: 1 }}>
              What is included
            </Typography>
            <List items={p.includes} icon />
            <Typography component="h4" sx={{ ...heading, fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", mb: 1 }}>
              What we usually need from you
            </Typography>
            <List items={p.needs} />
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default ServiceDetails;
