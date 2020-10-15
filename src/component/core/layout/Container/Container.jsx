import React from 'react';
import styled from "styled-components";
import {positionDefaults ,flexDefaults} from "../functions.js";
//styled
const ContainerStyle = styled.div`
    ${props => positionDefaults(props)}
    ${props => flexDefaults(props)}
`;

const Container = (props) => {
    return (
        <ContainerStyle {...props}>
            {props.children}
        </ContainerStyle>
    );
}
 
export default Container;