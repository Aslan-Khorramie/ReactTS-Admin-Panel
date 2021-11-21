import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

interface ContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen(open: boolean): void;
}
export default function Content(props: ContentProps) {
  const { isOpen = true, setOpen } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: isOpen ? "86vw" : "96vw",
      height: "94vh",
      position: "absolute",
      top: "6vh",
      marginLeft: isOpen ? "14vw" : "4vw",
      overflow: "auto",
      backgroundColor: theme.palette.secondary.light,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginLeft: "0",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.root} onClick={() => setOpen(false)}>
      {props.children}
    </Grid>
  );
}
