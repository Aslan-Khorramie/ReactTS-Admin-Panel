import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AppBar from "../AppBar/AppBar";
import Content from "../Content/Content";
import SideMenu from "../SideMenu/SideMenu";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      position: "relative",
    },
  }));
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <AppBar />
      <SideMenu />
      <Content>{props.children}</Content>
    </Grid>
  );
}
