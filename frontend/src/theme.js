import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      light: "#fff",
      main: "#222",
      dark: "#111",
      contrastText: "#fff",
      button: "##00b3ff",
    },
    secondary: {
        main: "#525659",
        dark: "#323639",
        contrastText: "#fff",
        button: "##00b3ff",
    }
  },
});

export default theme;