import { AppTheme } from "./types";
import { deepPurple, cyan } from "@material-ui/core/colors";

const appThemeOptions = {
  [AppTheme.LIGHT]: {
    palette: {
      type: "light",
      primary: {
        light: cyan[700],
        main: cyan[800],
        dark: cyan[900],
      },
      secondary: {
        light: deepPurple[600],
        main: deepPurple[700],
        dark: deepPurple[800],
      },
      text: {
        secondary: cyan[900],
      },
    },
  },
  [AppTheme.DARK]: {
    palette: {
      type: "dark",
      primary: {
        light: cyan[600],
        main: cyan[700],
        dark: cyan[800],
      },
      secondary: {
        light: deepPurple[600],
        main: deepPurple[700],
        dark: deepPurple[800],
      },
      text: {
        secondary: cyan[400],
      },
    },
  },
};

export default appThemeOptions;
