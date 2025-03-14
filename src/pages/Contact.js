import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Card,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import {  Email, WhatsApp, LocationOn, Phone } from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      validationErrors.email = "Enter a valid email";
    if (!formData.message.trim()) validationErrors.message = "Message cannot be empty";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_xo08jtx", // Your EmailJS Service ID
          "template_fufqkdg", // Your EmailJS Template ID
          formData,
          "your_emailjs_public_key" // Replace with your EmailJS public key
        )
        .then(
          () => {
            setOpen(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.error("Email Error:", error);
          }
        );
    }
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: "4rem" }}>
      <Typography variant="h4" gutterBottom align="center">
        Contact VR Techworld
      </Typography>
      <Typography align="center" sx={{ mb: 3 }}>
        Get in touch for Website Design, Hosting, Logo Design, Digital Ads, and Business Services.
      </Typography>

      <Card
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 5,
          background: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Contact Information</Typography>
            <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
              <LocationOn color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Chennai, India
              </Typography>
            </Box>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <Phone color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>
                +91 9042238332
              </Typography>
            </Box>
            <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
              <Email color="primary" />
              <Typography variant="body1" sx={{ ml: 1 }}>
                vrtechworld19@gmail.com
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
              
              <Tooltip title="Email" arrow>
                <IconButton color="error" href="mailto:vrtechworld19@gmail.com">
                  <Email />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp" arrow>
                <IconButton color="success" href="https://wa.me/919042238332">
                  <WhatsApp />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Success Snackbar */}
      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}