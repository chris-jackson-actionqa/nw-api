import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{actionQaLogo}</Toolbar>;
  };

  const actionQaLogo = (
    <Button to={"/"} component={Link} style={{ color: "#FFFFFF" }}>
      Nightwatch API Tutorial
    </Button>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
