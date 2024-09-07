import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        padding: "2rem 0",
        textAlign: "center",
        background: "#12365a",
        color: "#fff",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Pierre Marot. Tous droits réservés.
      </Typography>
    </Box>
  );
}

export default Footer;
