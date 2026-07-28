import React from "react";
import { Box, Typography } from "@mui/material";

const FlashNews = () => {
  const newsItems = [
    "Big discounts on our services! Contact us now!",
    "New features coming soon! Stay tuned!",
    "20% Limited-time offers available now!",
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 56, sm: 64 },
        left: 0,
        width: "100%",
        maxWidth: "100%",
        background: "#FF6B35",
        color: "white",
        py: { xs: 0.6, sm: 0.75 },
        overflow: "hidden",
        zIndex: 1100,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          gap: { xs: 4, sm: 6 },
          whiteSpace: "nowrap",
          animation: "flashScroll 28s linear infinite",
          "@keyframes flashScroll": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {[...newsItems, ...newsItems].map((news, index) => (
          <Typography
            key={`${news}-${index}`}
            component="span"
            sx={{
              display: "inline-block",
              fontFamily: '"Outfit", sans-serif',
              fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
              px: 0.5,
            }}
          >
            {news}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FlashNews;
