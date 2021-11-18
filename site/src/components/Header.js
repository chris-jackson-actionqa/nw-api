import { AppBar, Toolbar, Typography } from "@mui/material";
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
    <Typography variant="h6" component="h1">
      ActionQA
    </Typography>
  );

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}
