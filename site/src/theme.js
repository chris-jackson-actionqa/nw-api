import { red } from "@mui/material/colors";
import { createTheme, adaptV4Theme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    strange: {
      main: "#e53935",
    },
  },

  typography: {
    lesson: {
      fontSize: 30,
    },
  },
}));

export default theme;
