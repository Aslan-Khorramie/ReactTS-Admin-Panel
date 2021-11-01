import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
// import components
import ThemeWrapper from "../../components/ThemeWrapper";

const Login = () => {
    const useStyle = makeStyles(({
        root: {
            width: '100%',
            height: "100vh"
        }
    }))
    const classes = useStyle()

    return (
        <ThemeWrapper>
            <Grid container className={classes.root}>
                login
            </Grid>
        </ThemeWrapper>
    );
};

export default Login;
