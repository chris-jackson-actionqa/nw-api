import { AppBar, Toolbar, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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
    <Link href="#" color="#FFFFFF" underline="hover">
      <Typography variant="h6" component="h1">
        Nightwatch API Tutorial
      </Typography>
    </Link>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
