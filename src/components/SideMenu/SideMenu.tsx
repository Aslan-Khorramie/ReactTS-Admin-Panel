import React, { memo } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider } from "@material-ui/core";

// Import Components
import MenuItems from "./related components/MenuItems";

interface SideMenuProps {
  isOpen: boolean;
  setOpen(open: boolean): void;
}
function SideMenu(props: SideMenuProps) {
  const { isOpen = true, setOpen } = props;
  const useStyles = makeStyles((theme) => ({
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      position: "absolute",
      height: "94vh",
      width: isOpen ? "14vw" : "4vw",
      top: "6vh",
      overflowY: "auto",
      overflowX: isOpen ? "auto" : "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.contrastText,
      [theme.breakpoints.down("md")]: {
        width: isOpen ? "40vw" : "0",
        border: isOpen && "none",
      },
      [theme.breakpoints.down("sm")]: {
        width: isOpen ? "60vw" : "0",
        border: isOpen && "none",
      },
    },
    logo: {
      textAlign: "center",
      padding: "32px",
      fontSize: "2rem",
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
      open={isOpen}
      onClick={() => setOpen(true)}
    >
      {isOpen ? <div className={classes.logo}>user</div> : null}
      <Divider style={{ display: !isOpen ? "none" : "block" }} />
      <MenuItems isOpen={isOpen} setOpen={setOpen} />
      <Divider
        style={{ marginTop: "auto", display: !isOpen ? "none" : "block" }}
      />
    </Drawer>
  );
}

export default memo(SideMenu);
