import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

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

      success: {
        main: colors.green[500],
        dark: colors.green[700],
        contrastText: "#ffffff",
      },

      danger: {
        main: colors.red[500],
        dark: colors.red[700],
        contrastText: "#ffffff",
      },

    }
  },
});

export default theme;
