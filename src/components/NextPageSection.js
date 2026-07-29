import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const NextPageSection = ({ title, description, href, buttonLabel }) => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "100%",
        py: { xs: 4, md: 5 },
        mt: { xs: 4, md: 6 },
        bgcolor: "var(--card-bg)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            p: { xs: 3, md: 4 },
            bgcolor: "var(--surface)",
            borderRadius: "18px",
            border: "1px solid var(--card-border)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 700,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                mb: 1,
              }}
            >
              Next step
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 800,
                fontSize: { xs: "1.35rem", md: "1.7rem" },
                color: "var(--text)",
                lineHeight: 1.2,
                mb: description ? 1.25 : 0,
              }}
            >
              {title}
            </Typography>
            {description ? (
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "1rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  maxWidth: 620,
                }}
              >
                {description}
              </Typography>
            ) : null}
          </Box>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate(href)}
            sx={{
              fontFamily: '"Outfit", sans-serif',
              textTransform: "none",
              bgcolor: "var(--accent)",
              color: "#fff",
              px: 4,
              py: 1.4,
              borderRadius: "10px",
              boxShadow: "none",
              whiteSpace: "nowrap",
              '&:hover': {
                bgcolor: "var(--accent-hover)",
              },
            }}
          >
            {buttonLabel}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NextPageSection;
