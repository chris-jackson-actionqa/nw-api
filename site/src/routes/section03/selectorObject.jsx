import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const imageColumns = 10;
const buttonColumns = 12 - imageColumns;

export default function SelectorObject() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Selector Object</h2>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={buttonColumns}>
            <Stack spacing={3}>
              <Button variant="contained" data-testid="show-button">
                Show
              </Button>
              <Button variant="contained" data-testid="hide-button">
                Hide
              </Button>
              <Button variant="contained" data-testid="peek-a-boo-button">
                Peek-a-boo
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={imageColumns}>
            <Box
              component="img"
              src="/pexels-owl.jpg"
              data-testid="toggled-image"
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
