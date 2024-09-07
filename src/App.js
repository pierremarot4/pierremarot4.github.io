import React from "react";
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import APropos from "./components/APropos";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#12365a",
    },
    secondary: {
      main: "#424242",
    },
    background: {
      default: "#12365a",
      paper: "#12365a",
    },
    text: {
      primary: "#ffffff", 
      secondary: "#0c1b44", 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <CssBaseline />
        <Header />
        <Accueil />
        <APropos />
        <Competences />
        <Projets />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
