import React from 'react';
import styled from "styled-components";
//styled
const FlexContainerStyle = styled.div`
    width: ${props => props.width ? props.width : "initial"};
    ${props => props.height ? `height: ${props.height};` : ""}
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : ""};
    ${props => positionContent(props)}
    ${props => margin(props)}
`;
function margin(props){
    let output = "";
    if(props.margin){
        //if props.margin exists
        if(props.margin === "center"){
            output = "0 auto"
        }else{
            output = props.margin;
        }
    return `margin: ${output};`
    }else{
        return;
    }

}


function positionContent(props) {
    //props.position for horizontal and vertical positioning
    if(props.position){
        let position = props.position;
        position = position.split(" ");
    
        switch (props.direction) {
            case "column":
                return `
                justify-content: ${position[1]};
                align-items: ${position[0]};
                `
            case "column-reverse":
                return `
                justify-content: ${position[1]};
                align-items: ${position[0]};
                `
            case "row-reverse":
                return `
                justify-content: ${position[0]};
                align-items: ${position[1]};
                `
            default: //if props.direction is not set, assume it is "row"
                return `
                justify-content: ${position[0]};
                align-items: ${position[1]};
                `
        }
    }else{
        return``;
    }
}


const FlexContainer = (props) => {
    return (
        <FlexContainerStyle {...props}>
            {props.children}
        </FlexContainerStyle>
    );
}

export default FlexContainer;