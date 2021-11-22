import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import TutorialsSections from "./components/TutorialsSections";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <Grid container spacing={4} rowSpacing={8}>
      <Grid item xs={12}>
        <Box>
          <Header />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ m: 4 }}>
          <TutorialsSections />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}
