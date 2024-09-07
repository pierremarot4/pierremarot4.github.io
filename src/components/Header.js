import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    {
      title: "Accueil",
      url: "accueil",
      icon: <HomeIcon />,
    },
    {
      title: "A-propos",
      url: "a-propos",
      icon: <InfoIcon />,
    },
    {
      title: "Compétences",
      url: "competences",
      icon: <BuildIcon />,
    },
    {
      title: "Projets",
      url: "projets",
      icon: <WorkIcon />,
    },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mon Portfolio
        </Typography>
        <div className="desktop-menu">
          {navItems.map((item, index) => (
            <Button
              color="inherit"
              href={"#" + item.url}
              key={index}
              startIcon={item.icon}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="mobile-menu">
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              {navItems.map((item, index) => (
                <ListItem
                  button
                  component="a"
                  href={"#" + item.url}
                  key={index}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
