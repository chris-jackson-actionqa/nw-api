import { Stack, Typography } from "@mui/material";

export default function LocatorStrategiesExercise() {
  return (
    <Typography variant="lesson">
      <main style={{ padding: "1rem 0" }}>
      <Stack direction="column" alignItems="baseline" spacing={2}>
        <h1>EXERCISE: Locator Strategies</h1>
        <h2>This is H2 tag text</h2>
        <p class=".example">The ".example" class text</p>
        <a href="">Match this text</a>
        </Stack>
      </main>
    </Typography>
  );
}
