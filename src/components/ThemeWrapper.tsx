import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {createTheme, jssPreset, StylesProvider, ThemeProvider} from "@material-ui/core/styles";
import {create} from "jss";
import rtl from "jss-rtl";

// import interfaces
import {ChildrenProps} from "../interfaces/ChildrenProps";

const ThemeWrapper = (props: ChildrenProps) => {
    // Configure JSS
    const jss = create({plugins: [...jssPreset().plugins, rtl()]});

    const RTLTheme = createTheme({
        direction: "rtl", // Both here and <body dir="rtl">
        typography: {
            // fontFamily: ["Vazir-Medium-FD"]
        },
    });

    const LTRTheme = createTheme({
        direction: "ltr", // Both here and <body dir="rtl">
    });
    return (
        <ThemeProvider theme={LTRTheme}>
            <CssBaseline/>
            <StylesProvider jss={jss}>
                {props.children}
            </StylesProvider>
        </ThemeProvider>
    );
};

export default ThemeWrapper;
