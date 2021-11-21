import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { GrLanguage } from "react-icons/gr";
import { List, ListItem } from "@material-ui/core";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import "../../locale/config";
import { set_theme } from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    openBTN: {
      boxShadow: "none",
    },
    svg: {
      fontSize: "1.3rem",
    },
    typography: {
      //   padding: theme.spacing(2),
    },
    img: {
      marginRight: "8px",
      width: "2vw",
      borderRadius: "4px",
    },
  })
);

export default function SimplePopover() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        className={classes.openBTN}
        onClick={handleClick}
      >
        <GrLanguage className={classes.svg} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" className={classes.typography}>
          <ListItem
            button
            onClick={() => {
              i18n.changeLanguage("fa");
              dispatch(set_theme("rtl"));
              handleClose();
            }}
          >
            <Flag code="364" height="32" className={classes.img} />
            {t("appBar.farsi")}
          </ListItem>
          <ListItem
            button
            onClick={() => {
              i18n.changeLanguage("en");
              dispatch(set_theme("ltr"));
              handleClose();
            }}
          >
            <Flag code="840" height="32" className={classes.img} />
            {t("appBar.english")}
          </ListItem>
        </List>
      </Popover>
    </>
  );
}
