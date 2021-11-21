import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

interface ContentProps {
  children: React.ReactNode;
}
export default function Content(props: ContentProps) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "86vw",
      height: "94vh",
      position: "absolute",
      top: "6vh",
      marginLeft: "14vw",
      overflow: "auto",
      backgroundColor: theme.palette.secondary.light,
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {props.children}
    </Grid>
  );
}
