import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
 

function Projets() {
  const projects = [
    {
      title: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
      description: `La start-up Booki souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. 
      Ma mission était d'intégrer l'interface du site avec du code HTML et CSS. L'interface était composée d'un header, de plusieurs conteneurs avec des cards, et d'un footer. 
      La principale problématique était de rendre le site adaptif en utilisant les media query sur CSS. Ce projet m'a permis d'apprendre à structurer une page HTML, à lier un style CSS à mon code et surtout de savoir utiliser et maîtriser Git et GitHub.`,
      languages: ["HTML", "CSS", "Git", "GitHub"],
      icon: <WebIcon />,
      link: "https://github.com/pierremarot4/projet2.git"
    },
    {
      title: "Créez une page web dynamique avec JavaScript",
      description: `En tant que développeur front-end, je participe à la conception d'un site portfolio pour l'architecte d'intérieur Sophie Bluel. 
      Les principales tâches étaient de créer la page de présentation des travaux de l'architecte, la page de connexion de l'administrateur du site, et la modale permettant d'uploader de nouveaux médias. 
      La problématique majeure sur ce projet était, pour moi, la création de la modale. Grâce à ce projet, j'ai appris à maîtriser les bases de JavaScript et faire mes premiers pas dans l'algorithmie.`,
      languages: ["JavaScript", "HTML", "CSS"],
      icon: <DynamicFeedIcon />,
      link: "https://github.com/pierremarot4/projet3.git"
    },
    {
      title: "Créez une application web de location immobilière avec React",
      description: `En tant que développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers, je devais implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive. 
        Je devais me servir des composants React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur. Pour la navigation entre les différentes pages de l'application, je devais le configurer avec React Router. 
        Enfin, je devais utiliser Node.js pour exécuter du code JavaScript en dehors du navigateur. La principale problématique ici a été de réussir les différents composants, notamment le collapse, et de les intégrer aux différentes pages. 
        Ce projet m'a appris à utiliser des composants, ainsi que SASS pour gérer mon CSS, afin de créer des application web interactives et attrayantes.`,
      languages: ["React", "JavaScript", "SASS", "Node.js"],
      icon: <HomeWorkIcon />,
      link: "https://github.com/pierremarot4/projet6.git"
    },
  ];

  return (
    <Box
      id="projets"
      sx={{
        padding: "4rem 0",
        textAlign: "center",
        backgroundColor: "#555555",
        color: "text.secondary",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Mes projets
      </Typography>
      <Typography variant="body1" paragraph>
        Lors de ma formation, j'ai eu l'opportunité de travailler sur une variété
        de projets enrichissants qui m'ont permis de renforcer mes compétences
        techniques et ma créativité. Voici quelques exemples de projets sur
        lesquels j'ai travaillé :
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={10} md={10}>
            <Card 
              sx={{
                color: "text.primary",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                {project.icon}
                <Typography variant="h5" component="div">
                  {project.title}
                  <IconButton component="a" href={project.link} target="_blank">
                  <OpenInNewRoundedIcon />
                </IconButton>
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.description}
                </Typography>
                <div>
                  {project.languages.map((lang, langIndex) => (
                    <Tooltip title={lang} key={langIndex}>
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{
                          marginRight: "0.5rem",
                          border: "1px solid #ddd",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          backgroundColor: "#7c97a4",
                          color: "text.secondary",
                        }}
                      >
                        {lang}
                      </Typography>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projets;
