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
        <Grid container>
          <Grid item xs={buttonColumns}>
            <Stack spacing={3}>
              <Button variant="contained">Show</Button>
              <Button variant="contained">Hide</Button>
              <Button variant="contained">Peek-a-boo</Button>
            </Stack>
          </Grid>
          <Grid item xs={imageColumns}>
            <Box component="img" src="" />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
