import { Button, Typography, Grid } from "@mui/material";

export default function RelativeLocators() {
  return (
    <Typography variant="lesson">
      <main style={{ padding: "1rem 0" }}>
        <h2>Relative Locators</h2>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Button variant="contained" data-testid="vyvyan">
              Vyvyan
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" data-testid="mike">
              Mike
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" data-testid="rick">
              Rick
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" data-testid="neil">
              Neil
            </Button>
          </Grid>
        </Grid>
      </main>
    </Typography>
  );
}
