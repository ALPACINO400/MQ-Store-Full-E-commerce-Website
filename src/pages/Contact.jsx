import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5, backgroundColor: "white" }}>
      <Typography variant="h4" color="black" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" color="black" align="center" gutterBottom>
        Feel free to reach out to us for any questions or support.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" color="black">
          Email: maqatlan@gmail.com
        </Typography>
        <Typography variant="body2" color="black" sx={{ mt: 1 }}>
          Phone: +966555178246
        </Typography>
        <Typography variant="body2" color="black" sx={{ mt: 3 }}>
          Alternatively, you can leave us a message below.
        </Typography>
        <TextField
          label="Your Name"
          fullWidth
          required
          margin="normal"
          variant="outlined"
          backgroundcolor="white"
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
          sx={{ mt: 2 ,backgroundColor: "black"}}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
