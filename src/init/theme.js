import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      // Purple and green play nicely together.
      main: "#f9a825",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#aed581",
    },
    
  },
});

export default theme;
