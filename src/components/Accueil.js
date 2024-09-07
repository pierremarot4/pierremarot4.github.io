import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

function Accueil() {
  return (
    <Box
      id="accueil"
      sx={{
        padding: "6rem 0",
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "text.primary",
      }}
    >
      <Avatar
        alt="Pierre Marot"
        src={`${process.env.PUBLIC_URL}/photo.jpg`}
        sx={{ width: 150, height: 150, margin: "auto" }}
      />
      <Typography id="h1" gutterBottom sx={{ marginTop: "1rem" }}>
        Bienvenue sur mon portfolio
      </Typography>
      <Typography id="h2">
        Je suis Pierre Marot, un développeur web passionné par les nouvelles
        technologies et la création de solutions innovantes. Formé par
        OpenClassroom, j'ai acquis des compétences solides dans le développement
        de sites web modernes et interactifs.
      </Typography>
    </Box>
  );
}

export default Accueil;
