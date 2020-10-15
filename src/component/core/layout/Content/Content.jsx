import React from 'react';
import styled from "styled-components";
//styled
const ContentStyle = styled.section`
    margin-top: ${props => props.marginTop ? props.marginTop : "2rem"};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0"};
    ${props => props.minWidth ? `min-width: ${props.minWidth};` : ""}
    ${props => props.maxWidth ? `max-width: ${props.maxWidth};` : ""}
`;

const Content = (props) => {
    return (
        <ContentStyle {...props} />
    );
}
 
export default Content;