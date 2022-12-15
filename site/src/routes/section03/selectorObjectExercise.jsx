import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SelectorObjectExercise() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>EXERCISE: Selector Object</h2>
      <h3> #1: Selecting table cells</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Star</TableCell>
              <TableCell>Planet</TableCell>
              <TableCell>Light Years Away</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>42 Draconis</TableCell>
              <TableCell>42 Draconis b</TableCell>
              <TableCell>296</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AB Pictoris</TableCell>
              <TableCell>AB Pictoris b</TableCell>
              <TableCell>163</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Wolf 503</TableCell>
              <TableCell>Wolf 503 b</TableCell>
              <TableCell>145</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box>
        <h3> #2: Wait for element to be visible</h3>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              data-testid="power-on"
              onClick={() => {
                document.querySelector(
                  '[data-testid="its-alive"]'
                ).textContent = "Booting...";
                setTimeout(() => {
                  document.querySelector(
                    '[data-testid="its-alive"]'
                  ).textContent = "On";
                }, 7000);
              }}
            >
              Power On
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Chip label="Off" color="error" data-testid="its-alive" />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
