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
} from "@mui/material";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19/month",
    features: ["1 Website", "10GB Storage", "Basic Support"],
  },
  {
    title: "Pro",
    price: "$49/month",
    features: ["5 Websites", "50GB Storage", "Priority Support"],
  },
  {
    title: "Enterprise",
    price: "$99/month",
    features: ["Unlimited Websites", "200GB Storage", "24/7 Support"],
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
    <Container maxWidth="lg" sx={{ py: 10 }}>
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
                "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {plan.title}
                </Typography>
                <Typography variant="h4" color="primary" my={2}>
                  {plan.price}
                </Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="contained"
                  color="primary"
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
          <Typography variant="h6" style={{paddingTop:'15px'}}>
            You selected the <strong>{selectedPlan?.title}</strong> plan.
          </Typography>
          <Typography className="price_tag" color="primary" variant="h5" mt={2}>
            {selectedPlan?.price}
          </Typography>
        </DialogContent>
        <DialogActions style={{marginBottom:'15px'}}>
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
