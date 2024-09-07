import React from "react";
import { Box, Typography } from "@mui/material";

function APropos() {
  return (
    <Box
      id="a-propos"
      sx={{
        padding: "4rem 0",
        textAlign: "center",
        backgroundColor: "background.paper",
        color: "text.secondary",
      }}
    >
      <Typography variant="h2" gutterBottom>
        À propos de moi
      </Typography>
      <Typography variant="body1" paragraph>
        Récemment reconverti dans le développement informatique, je suis issu initialement 
        d'une formation marketing et gestion de projet numérique. Après un court passage par le 
        métier d'agent immobilier, je suis retourné vers ma première passion, le web, en me lançant
        un nouveau défi en basculant du côté marketing/commercial au côté développement. Fort de ces 
        différentes expériences et formations, je me mets désormais à  votre disposition afin de 
        répondre à vos différents besoins en termes de développement HTML/CSS, JavaScript et React.
      </Typography>
      <Typography variant="body1" paragraph>
        Je suis toujours à la recherche de nouvelles opportunités pour
        acquérir de nouvelles compétences. Mon parcours
        professionnel m'a permis de développer une forte capacité d'adaptation
        et une excellente gestion du stress.
      </Typography>
    </Box>
  );
}

export default APropos;
