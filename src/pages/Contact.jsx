import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Feel free to reach out to us for any questions or support.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="white">
          Email: maqatlan@gmail.com {/* Replace with your actual email */}
        </Typography>
        <Typography variant="body2" color="white" sx={{ mt: 1 }}>
          Phone: +966555178246 {/* Replace with your actual phone number */}
        </Typography>
        <Typography variant="body2" color="white" sx={{ mt: 3 }}>
          Alternatively, you can leave us a message below.
        </Typography>
        <TextField
          label="Your Name"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Your Email"
          type="email"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
