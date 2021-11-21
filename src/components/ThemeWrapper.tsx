import React from "react";
import { CssBaseline } from "@material-ui/core";
import {
  createTheme,
  Direction,
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { useSelector } from "react-redux";

// import interfaces
import { RootState } from "../redux/slices/rootSlice";
import { ChildrenProps } from "../interfaces";

declare module "@material-ui/core/styles/withStyles" {
  // Augment the BaseCSSProperties so that we can control jss-rtl
  interface BaseCSSProperties {
    /**
     * Used to control if the rule-set should be affected by rtl transformation
     */
    flip?: boolean;
  }
}

const ThemeWrapper = (props: ChildrenProps) => {
  const direction = useSelector((state: RootState) => state.theme.direction);

  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Configure JSS
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  const theme = createTheme({
    direction: direction as Direction,
    typography: {
      fontFamily: direction === "rtl" ? "Vazir-Medium-FD" : "monospace",
    },
    palette: {
      primary: {
        light: "#c5e1a5",
        main: "#689f38",
        dark: "#33691e",
        contrastText: "#000",
      },
      secondary: {
        light: "#f5f5f5",
        main: "#bdbdbd",
        dark: "#616161",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider jss={jss}>{props.children}</StylesProvider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
