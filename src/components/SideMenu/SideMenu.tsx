import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

export default function SideMenu() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "14vw",
      height: "94vh",
      position: "absolute",
      top: "6vh",
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      side menu
    </Grid>
  );
}
