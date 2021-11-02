import React from "react";
import { Box, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaLock } from "react-icons/fa";
import Flag from "react-world-flags";

// import components
import ThemeWrapper from "../../components/ThemeWrapper";

const Login = () => {
  const useStyle = makeStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    },
    flag: {
      borderRadius: "4px",
      margin: "auto 32px",
      cursor: "pointer",
    },
  });
  const classes = useStyle();

  return (
    <ThemeWrapper>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.item}>
          <Box className={classes.box}>
            <FaLock size={27} color={"red"} style={{ marginBottom: "16px" }} />
            <Box>Login</Box>
          </Box>
          <form className={classes.form} noValidate>
            <TextField
              type="text"
              placeholder="Enter Username"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              type="password"
              placeholder="Enter Password"
              variant="outlined"
              className={classes.input}
            />
            <Button className={classes.btn}>Login</Button>
          </form>
          <Box className={classes.flagBox}>
            <Box>
              <Flag code="364" height="32" className={classes.flag} />
            </Box>
            <Box>
              <Flag code="840" height="32" className={classes.flag} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeWrapper>
  );
};

export default Login;
