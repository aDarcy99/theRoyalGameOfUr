import React from 'react';
import styled from "styled-components";
//styled
const TypographyStyle = styled.span`
    ${props => props.font ? `font: ${props.font};` : `
    font-weight: ${props.weight ? props.weight : "400"};
    font-family: ${props.family ? props.family : "Arial"};
    font-size: ${props.size ? props.size : "1em"};
    ${props => `
        color: ${props.color ? props.color : "black"};
        line-height: ${props.lineHeight ? props.lineHeight : "initial"};
        letter-spacing: ${props.letterSpacing ? props.letterSpacing : "initial"};
        text-align: ${props.position || "initial"};`
        }
    `} 
`;

const Typography = (props) => {
    return (
        <TypographyStyle {...props} />
    );
}

export default Typography;