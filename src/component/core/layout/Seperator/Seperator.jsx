import React from 'react';
import styled from "styled-components";
//styled
const SeperatorStyle = styled.hr`
    width: ${props => props.width || "100%"};
    margin: 0 auto;
`

const Seperator = (props) => {
    return (
        <SeperatorStyle {...props} />
    );
}
 
export default Seperator;