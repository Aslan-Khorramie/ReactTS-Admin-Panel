import React from "react";
import { Box, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { FaLock } from "react-icons/fa";
import Flag from "react-world-flags";
import { useDispatch } from "react-redux";
import "../../locale/config";

// import components
import { set_theme } from "../../redux/slices/themeSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const useStyle = makeStyles((theme: Theme) => ({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // flip: true,
    },
    item: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "16px",
    },
    formHolder: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      width: "25%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "100%",
      marginBottom: "16px",
      flip: true,
    },
    btn: {
      width: "100%",
      marginBottom: "16px",
      backgroundColor: "blue",
      color: "white",
      padding: "12px",
    },
    flagBox: {
      width: "25%",
      display: "flex",
      justifyContent: "center",
      direction: theme.direction,
      // flip: false,  we should use flip to flip elements and use direction not to flip
    },
    flag: {
      borderRadius: "4px",
      margin: "auto 32px",
      cursor: "pointer",
    },
  }));
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.item}>
        <Box className={classes.box}>
          <FaLock size={27} color={"red"} style={{ marginBottom: "16px" }} />
          <Box>{t("login_page.title")}</Box>
        </Box>
        <form className={classes.form} noValidate>
          <TextField
            type="text"
            placeholder={t("login_page.username")}
            variant="outlined"
            className={classes.input}
            autoComplete="off"
          />
          <TextField
            type="password"
            placeholder={t("login_page.password")}
            variant="outlined"
            className={classes.input}
            autoComplete="off"
          />
          <Button className={classes.btn}>{t("login_page.login_btn")}</Button>
        </form>
        <Box className={classes.flagBox}>
          <Box>
            <Flag
              code="364"
              height="32"
              className={classes.flag}
              onClick={() => {
                dispatch(set_theme("rtl"));
                i18n.changeLanguage("fa");
              }}
            />
          </Box>
          <Box>
            <Flag
              code="840"
              height="32"
              className={classes.flag}
              onClick={() => {
                dispatch(set_theme("ltr"));
                i18n.changeLanguage("en");
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
