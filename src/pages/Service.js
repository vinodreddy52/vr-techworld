import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Web, Brush, Campaign, Receipt, Assignment, Business, Work,  } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const services = [
  { icon: <Web fontSize="large" sx={{ color: "#FFEB3B" }} />, title: "Website Design & Hosting", description: "We craft modern, mobile-friendly, and SEO-optimized websites that captivate audiences. Our secure hosting ensures 99.9% uptime and fast performance." },
  { icon: <Brush fontSize="large" sx={{ color: "#E91E63" }} />, title: "Logo Design", description: "Get a unique, high-resolution logo that represents your brand identity. We design professional logos tailored to your business theme and audience." },
  { icon: <Campaign fontSize="large" sx={{ color: "#4CAF50" }} />, title: "Social Media & Google Ads", description: "Boost your brand’s reach with strategic digital marketing. We create targeted campaigns for Facebook, Instagram, and Google Ads." },
  { icon: <Receipt fontSize="large" sx={{ color: "#FF9800" }} />, title: "Income Tax & TDS Return", description: "We provide hassle-free tax filing and compliance solutions for businesses and individuals, ensuring accuracy and maximum deductions." },
  { icon: <Assignment fontSize="large" sx={{ color: "#3F51B5" }} />, title: "GST & LLP Registration", description: "Register your business with ease. We handle GST and LLP registration processes efficiently with government compliance." },
  { icon: <Business fontSize="large" sx={{ color: "#9C27B0" }} />, title: "Firm & MSME Registration", description: "Start your business legally with our firm and MSME registration services. Unlock benefits like loans, tax exemptions, and subsidies." },
  { icon: <Work fontSize="large" sx={{ color: "#009688" }} />, title: "ESI, PF & Labour Compliance", description: "Ensure compliance with employee benefits like ESI, PF, and labor laws. We assist businesses in setting up payroll and legal formalities." },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile:"", message: "" });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrors({}); // Reset validation errors when closing the dialog
    setFormData({ name: "", email: "", message: "" }); // Optional: Reset form fields
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  
  const validateMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
  
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      validationErrors.email = "Enter a valid email";
    if (!formData.mobile.trim() || !validateMobile(formData.mobile))
      validationErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.message.trim()) validationErrors.message = "Message cannot be empty";
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_xo08jtx",
          "template_fufqkdg",
          formData,
          "your_emailjs_public_key"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", mobile: "", message: "" });
            setOpen(false); // Close dialog after success
          },
          (error) => {
            console.error("Email Error:", error);
          }
        );
    }
  };
  
  

  return (
    <Box sx={{ py: 15 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4, opacity: 0.8 }}>
          Explore our wide range of services designed to help your business thrive.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", transition: "0.3s", "&:hover": { transform: "scale(1.03)", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)" } }}>
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <Box mb={2}>{service.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call-To-Action Button */}
        <Box textAlign="center" mt={5}>
          <Button variant="contained" color="primary" sx={{ fontSize: "1rem", px: 4, py: 1.5, borderRadius: "30px", backgroundColor: "#1F4068", "&:hover": { background: "#1976d2" } }} onClick={handleOpen}>
            Get a Free Consultation
          </Button>
        </Box>

        {/* Consultation Form Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle className="" sx={{ pb: 2 }}>Get a Free Consultation</DialogTitle>
    <DialogContent dividers sx={{ p: 3, overflowY: "auto", maxHeight: "70vh" }}>
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
        label="Mobile Number"
        fullWidth
        variant="outlined"
        name="mobile"
        value={formData.mobile}
        onChange={(e) => {
            // Allow only numbers
            const value = e.target.value.replace(/\D/g, "");
            // Limit to 10 digits
            if (value.length <= 10) {
            setFormData({ ...formData, mobile: value });
            }
        }}
        error={!!errors.mobile}
        helperText={errors.mobile}
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
      <DialogActions>
        <Button className="cancel_btn" onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Box>
  </DialogContent>
</Dialog>


      </Container>
    </Box>
  );
};

export default Services;
