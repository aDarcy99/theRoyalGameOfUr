import React from 'react';
import styled from "styled-components";
//Components
import { Typography as Typo } from "../core.js";
//styled
const ConsistentStyle = (props) => (`
    font-family: ${props => props.font || props.theme.fonts.heading.value || "Arial"};
    margin: 0.5em 0;
    text-align: ${props.position || "initial"};
`)

const HeadingStyle = styled(Typo)`
    ${props => ConsistentStyle(props)}
    ${props => HeadingSwitch(props)}
`;

const HeadingSwitch = (props) => {
    switch (props.variant) {
        case "h2":
            return `
            font-size: ${props.size || `2.25em`};
            `;
        case "h3":
            return `
            font-size: ${props.size || `2em`};
            `;
        case "h4":
            return `
            font-size: ${props.size || `1.75em`};
            `;
        case "h5":
            return `
            font-size: ${props.size || `1.5em`};
            `;
        case "h6":
            return `
            font-size: ${props.size || `1.25em`};
            `;
        default:
            return `
            font-size: ${props.size || `2.5em`};
            `;
    }
};

const Heading = (props) => {
    return (
        <HeadingStyle forwardedAs={props.variant || "h1"} {...props} />
    );
}

export default Heading;