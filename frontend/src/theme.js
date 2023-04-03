import { createTheme } from "@mui/material/styles";
import { colors, withTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },
    secondary: {
      main: colors.grey[800],
    },
    button: {
      main: colors.blue[500],
      dark: colors.blue[700],
      contrastText: '#ffffff',
    }
  },
});

export default theme;