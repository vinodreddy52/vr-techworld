import React from "react";
import { Box, Typography } from "@mui/material";

const FlashNews = () => {
  const newsItems = [
    "🚀 Big discounts on our services! Contact us now!",
    "📢 New features coming soon! Stay tuned!",
    "🔔 20% Limited-time offers available now!",
  ];

  //const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 70, // Adjust based on navbar height
        left: 0,
        width: "100%",
        background: "#FF5733",
        color: "white",
        padding: "6px 0",
        overflow: "hidden",
        zIndex: 1000,
        fontSize: { xs: "12px", sm: "14px", md: "16px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "50px", // Space between news items
          whiteSpace: "nowrap",
          animation: "scrollText 25s linear infinite", // Slower scrolling
          "@keyframes scrollText": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" },
          },
        }}
        //onMouseEnter={() => setIsHovered(true)}
        //onMouseLeave={() => setIsHovered(false)}
      >
        {newsItems.concat(newsItems).map((news, index) => ( // Duplicate for seamless loop
          <Typography key={index} sx={{ display: "inline-block" }}>
            {news}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FlashNews;
