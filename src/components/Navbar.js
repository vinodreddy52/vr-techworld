import React, { useState } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", type: "home" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
  // { label: "Privacy", to: "/privacy" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
    }
  };

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'var(--appbar-bg)',
          boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 1.5, sm: 2, md: 3 },
            gap: 1,
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Box
              component="img"
              src="/images/white_newlogo.png"
              alt="VR TechWorld"
              width={225}
              height={64}
              onClick={() => handleNavigation("home")}
              sx={{
                width: { xs: 130, sm: 160, md: 180 },
                maxWidth: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navLinks.map((link) =>
              link.type === "home" ? (
                <Button
                  key={link.label}
                  color="inherit"
                  onClick={() => handleNavigation("home")}
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={link.label}
                  color="inherit"
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                > 
                  {link.label}
                </Button>
              )
            )}
          </Box>

          <IconButton color="inherit" onClick={toggleTheme} aria-label="Toggle theme" sx={{ ml: 1 }}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeDrawer}
        sx={{ display: { xs: "block", md: "none" } }}
        PaperProps={{
          sx: { width: { xs: "80vw", sm: 280 }, maxWidth: 320 },
        }}
      >
        <List sx={{ pt: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              {link.type === "home" ? (
                <ListItemButton onClick={() => handleNavigation("home")}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={RouterLink}
                  to={link.to}
                  onClick={closeDrawer}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontFamily: '"Outfit", sans-serif',
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
