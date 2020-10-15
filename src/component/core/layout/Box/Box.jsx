import React from 'react';
import styled from "styled-components";
//functions
import {positionDefaults} from "../functions.js";
//styled
const BoxStyle = styled.div`
    ${props => positionDefaults(props)}
    padding: 0.5rem;
    border: 0;
    border-radius: 0.5em;
    background-color: #F6F6F6;
`;

const Box = (props) => {
    return (
        <BoxStyle {...props} />      
    );
}
 
export default Box;