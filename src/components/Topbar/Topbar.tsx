import React, { memo } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { BiMenu } from "react-icons/bi";
import ChangeLang from "../ChangeLang/ChangeLang";
import { useHistory } from "react-router";

interface TopbarProps {
  setOpen(open: boolean): void;
}

function Topbar(props: TopbarProps) {
  const { setOpen } = props;
  const route = useHistory();

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: "6vh",
      display: "flex",
      alignItems: "center",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    logo: {
      marginRight: "auto",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    menuButton: {
      marginRight: 36,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="absolute" className={clsx(classes.appBar)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
          onClick={() => setOpen(true)}
        >
          <BiMenu />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => route.push("/dashboard")}
          className={classes.logo}
        >
          LOGO
        </IconButton>
        <ChangeLang />
      </Toolbar>
    </AppBar>
  );
}

export default memo(Topbar);
