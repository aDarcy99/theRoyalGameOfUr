export function positionDefaults(props) {
    return `
        ${marginDefault(props.margin)}
        ${props.width ? `width: ${props.width};` : ""}
        ${props.minWidth ? `min-width: ${props.minWidth};` : ""}
        ${props.maxWidth ? `max-width: ${props.maxWidth};` : ""}
        ${props.margin ? `margin: ${props.margin};` : ""}
        ${props.height ? `height: ${props.height};` : ""}
    `;
}

function marginDefault(margin){
    if(margin){
        //if margin exists
        if(margin === "center"){
            "margin: 0 auto;";
        }else{
            `margin: ${margin};`;
        }
    }else{
        return "margin: 0 auto;"
    }

}
export function flexDefaults(props) {
    if (props.flex) {
        return `
            display: flex;
            ${props.direction ? `flex-direction: ${props.direction};` : ""}
            ${props.wrap ? `flex-wrap: ${props.wrap};` : ""}
            ${props.position ? flexPosition(props) : ""}
        `;
    }
}



//Combines align-items and justify content;
function flexPosition(props) {
    //props.position for horizontal and vertical positioning
    if (props.position) {
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
    } else {
        return ``;
    }
}