// import React from "react";
// import { Box, Typography, Link } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: "#333",
//         color: "#fff",
//         padding: "20px",
//         textAlign: "center",
//         mt: 4,
//       }}
//     >
//       <Typography variant="body2" component="p" gutterBottom>
//         © {new Date().getFullYear()} Mohammad's Electronics E-Commerce. All
//         rights reserved.
//       </Typography>
//       <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
//         <Link href="#" color="inherit" underline="hover">
//           Privacy Policy
//         </Link>
//         <Link href="#" color="inherit" underline="hover">
//           Terms of Service
//         </Link>
//         <Link href="/contact" color="inherit" underline="hover">
//           Contact Us
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;




import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Typography variant="body2" component="p" gutterBottom>
        © {new Date().getFullYear()} Mohammad's Electronics E-Commerce. All
        rights reserved
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
