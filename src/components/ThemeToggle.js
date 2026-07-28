import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../ThemeContext";

const ThemeToggle = ({ sx }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <IconButton onClick={toggleTheme} color="inherit" sx={sx} aria-label="Toggle theme">
      {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
