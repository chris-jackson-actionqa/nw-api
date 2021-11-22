import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => {
  header: {
    backgroundColor: "#400CC";
  }
});

export default function Header() {
  const { header } = useStyles();
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
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
