import React, { memo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Topbar from "../Topbar/Topbar";
import SideMenu from "../SideMenu/SideMenu";
import Content from "../Content/Content";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout(props: LayoutProps) {
  const [sideOpen, setSideOpen] = useState<boolean>(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100vw",
      height: "100vh",
      position: "relative",
    },
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar,
  }));

  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Topbar setOpen={setSideOpen} />
      <SideMenu isOpen={sideOpen} setOpen={setSideOpen} />
      <Content isOpen={sideOpen} setOpen={setSideOpen}>
        {props.children}
      </Content>
    </Grid>
  );
}

export default memo(Layout);
