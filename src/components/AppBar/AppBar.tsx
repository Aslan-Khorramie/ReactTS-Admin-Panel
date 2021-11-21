import React from "react";
import { makeStyles, Grid, IconButton } from "@material-ui/core";
import { HiUserCircle } from "react-icons/hi";

// import components
import ChangeLanguage from "../ChangeLang/ChangeLang";

export default function AppBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "6vh",
      position: "absolute",
      top: "0",
      backgroundColor: theme.palette.primary.main,
      color: "white",
      display: "flex",
      alignItems: "center",
    },
    logo: {
      color: "white",
      borderRadius: "4px",
    },
    menu: {
      display: "flex",
      justifyContent: "end",
      paddingRight: "5vw",
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={4} xs={12}>
        <IconButton className={classes.logo}>logo</IconButton>
      </Grid>
      <Grid item md={8} xs={12} className={classes.menu}>
        <ChangeLanguage />
        <HiUserCircle />
      </Grid>
    </Grid>
  );
}
