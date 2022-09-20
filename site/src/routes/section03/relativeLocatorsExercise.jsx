import {
  Button,
  Typography,
  Grid,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function RelativeLocatorsExercise() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 data-testid="page-header">EXERCISE: Relative Locators</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl>
            <InputLabel htmlFor="first-name-input">First Name</InputLabel>
            <OutlinedInput
              id="first-name-input"
              value="James"
              label="First Name"
              data-testid="first-name-input"
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <InputLabel htmlFor="last-name-input">Last Name</InputLabel>
            <OutlinedInput
              id="last-name-input"
              value="Kirk"
              label="Last Name"
              data-testid="last-name-input"
            />
          </FormControl>
          {/* <TextField
            label="Last Name"
            defaultValue="Kirk"
            data-testid="last-name-field"
          /> */}
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" data-testid="cancel">
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" data-testid="submit">
            Boldly Go
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
