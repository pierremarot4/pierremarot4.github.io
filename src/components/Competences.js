import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import PublicIcon from "@mui/icons-material/Public";
import GitHubIcon from "@mui/icons-material/GitHub";
import BugReportIcon from "@mui/icons-material/BugReport";
import LanguageIcon from "@mui/icons-material/Language";

function Competences() {
  const skills = [
    { name: "JavaScript", icon: <CodeIcon /> },
    { name: "HTML/CSS", icon: <LanguageIcon /> },
    { name: "React", icon: <CodeIcon /> },
    { name: "SQL", icon: <StorageIcon /> },
    { name: "Office 365", icon: <PublicIcon /> },
    { name: "JIRA ticketing", icon: <BugReportIcon /> },
    { name: "Excel", icon: <StorageIcon /> },
    { name: "Teams", icon: <PublicIcon /> },
    { name: "Reporting", icon: <StorageIcon /> },
    { name: "Stratégie numérique", icon: <PublicIcon /> },
    { name: "Marketing opérationnel", icon: <PublicIcon /> },
    { name: "Marketing automation", icon: <PublicIcon /> },
    { name: "SEO/SEA", icon: <PublicIcon /> },
    { name: "GitHub", icon: <GitHubIcon /> },
  ];

  return (
    <Box
      id="competences"
      sx={{
        padding: "4rem 0",
        textAlign: "center",
        backgroundColor: "#555555",
        color: "text.primary",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Mes compétences
      </Typography>
      <Typography variant="body1" paragraph>
        Grâce à ma formation et à mon expérience, j'ai développé une large gamme
        de compétences en développement, marketing et gestion de projet. Voici quelques-unes des
        compétences clés que je maîtrise :
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem 2rem",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#0c1b44",
                  color: "text.primary",
                },
              }}
            >
              {skill.icon}
              <Typography variant="body1">{skill.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Competences;
