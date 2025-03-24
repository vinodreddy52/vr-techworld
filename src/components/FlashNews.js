import React from "react";
import { Box, Typography } from "@mui/material";

const FlashNews = () => {
  const newsItems = [
    "🚀 Big discounts on our services! Contact us now!",
    "📢 New features coming soon! Stay tuned!",
    "🔔 20% Limited-time offers available now!",
  ];

  return (
    <Box className="flash_news" sx={{ 
        position: "fixed",  // Stick to the top
        top: 70,
        left: 0,
        width: "100%",
        background: "#FF5733",
        color: "white",
        padding: "5px",
        textAlign: "center",
        zIndex: 2000, 
    }}>
      <Typography
        component="div"
        sx={{
          display: "inline-block",
          animation: "scrollText 15s linear infinite",
          "@keyframes scrollText": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" },
          },
        }}
      >
        {newsItems.map((news, index) => (
          <span key={index} style={{ marginRight: "50px" }}>
            {news}
          </span>
        ))}
      </Typography>
    </Box>
  );
};

export default FlashNews;
