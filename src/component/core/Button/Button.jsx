import React, { useContext, useEffect, useState, useRef } from 'react';
import styled from "styled-components";
import tinyColor from "tinycolor2";
//Context
import { ThemeContext } from "styled-components";

//Styling that is consistent regardless of variant 
const ConstantStyle = (props) => `
    font-family: Arial;
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 0.09em;
    margin: 1em;
    padding: 0.75em 1.5em;
    border-radius: 4px;
    transition: background-color 0.2s;
`;
//styled
function TypeSwitch(props) {
    const variant = props.variant || "";
    switch (variant) {
        case "transparent":
            return `
             border: 0;
             color: #30ADF2;
             background-color: ${props.theme.colors.tertiary || "inherit"};
             &:hover{
                 background-color: ${tinyColor(props.theme.colors.primary).setAlpha(0.1) || "inherit"};
             }
             `;
        case "outline":
            return `
             background-color:inherit;
             border: 1px solid white;
             &:hover{
                 background-color: ${tinyColor(props.theme.colors.primary).setAlpha(0.1) || "inherit"};
             }
             `;
        default:
            return `
             color: white;
             border: 0;
             background-color: ${props.theme.colors.primary || "inherit"};
             &:hover{
                 background-color: ${tinyColor(props.theme.colors.primary).lighten(11) || "inherit"};
             }
             `;
    }
}
const DefaultStyle = styled.button`
    ${props => TypeSwitch(props)}
    ${props => ConstantStyle(props)}
`;

const Button = (props) => {
    const buttonRef = useRef();
    const themeContext = useContext(ThemeContext);

    return (
        <DefaultStyle
            theme={themeContext}
            ref={buttonRef}
            variant={props.variant}
            type={props.type ? props.type : "button"}
            {...props}
        />
    );
}

export default Button;