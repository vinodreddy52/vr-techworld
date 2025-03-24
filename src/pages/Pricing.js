import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";

const pricingPlans = [
  {
    title: "Basic",
    price: "₹ 3500",
    description: "Ideal for individuals and small businesses starting online.",
    features: [
      "1 Website",
      "5 Static Web Pages",
      "Basic Support",
      "Mobile-Friendly Design",
      "SEO-Optimized Structure",
      "Fast Loading Speed",
    ],
    services: ["Domain Setup Assistance", "Basic Website Analytics"],
  },
  {
    title: "Pro",
    price: "₹ 7500",
    description: "Best value for growing businesses looking for advanced features.",
    features: [
      "1 Website",
      "10 Static Web Pages",
      "Priority Support",
      "Free SSL Certificate",
      "Custom Domain Integration",
      "SEO Optimization",
      "Performance Monitoring",
      "Custom Contact Forms",
    ],
    services: [
      "Google Analytics Integration",
      "Advanced SEO Setup",
      "Social Media Integration",
    ],
    highlight: true, // Ensure Pro is always highlighted
  },
  {
    title: "Enterprise",
    price: "₹ 15,000",
    description:
      "Comprehensive solutions for businesses requiring scalability and dedicated support.",
    features: [
      "2 Websites",
      "Custom Web Pages",
      "Dedicated Support 24/7",
      "Free SSL Certificate",
      "Custom Domain Integration",
      "Advanced Security Features",
      "Cloud Hosting for Maximum Uptime",
      // "E-Commerce & Payment Integration",
      // "Custom API Integrations",
    ],
    services: [
      "Dedicated Account Manager",
      "Website Performance Optimization",
      // "Full API & CRM Integration",
    ],
  },
];

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 15 }}>
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        Our Pricing Plans
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" mb={4}>
        Choose a plan that fits your business needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                transition: "0.3s",
                position: "relative",
                ...(plan.highlight && {
                  border: "3px solid #ff9800",
                  backgroundColor: "#fff3e0",
                  boxShadow: "0px 4px 15px rgba(255, 152, 0, 0.4)",
                }),
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              {plan.highlight && (
                <Chip
                  label="Most Popular"
                  color="warning"
                  sx={{
                    position: "absolute",
                    top: -3,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontWeight: "bold",
                    fontSize: "14px",
                    padding: "5px 10px",
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {plan.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" mb={2}>
                  {plan.description}
                </Typography>
                <Typography variant="h4" color="primary" my={2} fontWeight="bold">
                  {plan.price}
                </Typography>
                <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
                  Features:
                </Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                {plan.services && (
                  <>
                    <Typography variant="h6" fontWeight="bold" mt={2} mb={1}>
                      Additional Services:
                    </Typography>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {plan.services.map((service, i) => (
                        <li key={i} style={{ marginBottom: "8px" }}>
                          🔹 {service}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                <Button
                  variant="contained"
                  color={plan.highlight ? "warning" : "primary"}
                  fullWidth
                  sx={{ mt: 3, borderRadius: "8px" }}
                  onClick={() => handleChoosePlan(plan)}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Plan Confirmation Modal */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle className="dialog_title">Confirm Your Plan</DialogTitle>
        <DialogContent>
          <Typography variant="h6" style={{ paddingTop: "15px" }}>
            You selected the <strong>{selectedPlan?.title}</strong> plan.
          </Typography>
          <Typography className="price_tag" color="primary" variant="h5" mt={2}>
            {selectedPlan?.price}
          </Typography>
        </DialogContent>
        <DialogActions style={{ marginBottom: "15px" }}>
          <Button className="cancel_btn" onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Proceed to Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Pricing;
