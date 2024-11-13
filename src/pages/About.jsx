import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your Trusted Destination for High-Quality PCs & Accessories
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          At [MQ Store], we are passionate about bringing top-quality
          electronics directly to you, with a special focus on PCs and their
          accessories. Our mission is to empower tech enthusiasts and
          professionals alike with the best products on the market, whether
          you're building a high-performance gaming rig, upgrading your
          work-from-home setup, or looking for the latest PC accessories.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body1">
          We specialize in a diverse range of products to meet all your PC
          needs. From powerful desktops, laptops, and components to must-have
          accessories such as keyboards, mice, headsets, and more, we are
          committed to offering you the latest technology at competitive prices.
          All of our products are sourced from trusted brands and come with a
          guarantee of quality and durability.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1">
          We understand that buying electronics is a significant investment, and
          we’re here to make it worthwhile. Our team is dedicated to providing
          excellent customer service, fast and reliable shipping, and a secure
          online shopping experience. Whether you’re a gamer, developer,
          designer, or a general tech enthusiast, we’ve got the products and the
          expertise to help you make the right choice.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>
          Join Us on Our Journey
        </Typography>
        <Typography variant="body1">
          Thank you for choosing [MQ Store] as your go-to electronics store.
          We’re excited to be part of your tech journey and to provide you with
          the very best in PC hardware and accessories. Explore our store, and
          don’t hesitate to reach out with any questions. Happy shopping!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
