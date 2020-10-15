import React from 'react';
import { ThemeProvider } from "styled-components";
//Default theme
const theme = {
    fonts: {
        brand: `"Raleway", sans-serif`,
        heading: `Arial`,
        accent: `"Lucida Console", Courier, monospace`,
        body: `Arial`
    },
    colors: {
        primary: `#306CFA`,
        secondary: `#FFC333`,
        background: `white`,
        text: {
            primary: `black`,
            secondary: `white`
        }
    },
    breakpoints: {
        sm: `520px`, //520px - 0
        md: `890px`, // 890px - 520px
        lg: ``,
        xl: ``
    }
}

const CoreTheme = (props) => {
    return (
        <ThemeProvider theme={props.theme || theme}>
            {props.children}
        </ThemeProvider>
    );
}

export default CoreTheme;