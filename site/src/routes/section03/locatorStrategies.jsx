import { Button, Stack, Typography } from "@mui/material";

export default function LocatorStrategies() {
  return (
    <Typography variant="lesson">
      <main style={{ padding: "1rem 0" }}>
        <h2>Locator Strategies</h2>
        <Stack direction="column" alignItems="baseline" spacing={2}>
          <Button
            id="buttonDoctorStrange"
            data-testid="button-doctor-strange"
            variant="contained"
            color="primary"
          >
            <Typography variant="lesson">Doctor Strange</Typography>
          </Button>
          <a href="">Spider Man</a>
          <a href="">Black Panther</a>
          <a href="">Black Widow</a>
          <span>This is span text</span>
        </Stack>
      </main>
    </Typography>
  );
}
