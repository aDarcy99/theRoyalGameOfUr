import React, {useContext} from 'react';
import styled,{ThemeContext} from "styled-components";
//Typography
import Typo from "./Typography.jsx";
//styled
const ParagraphyStyle = styled(Typo)`
    margin: 0.75em 0;
`;

const Paragraph = (props) => {
    const themeContext = useContext(ThemeContext); 
    return (
        <ParagraphyStyle forwardedAs="p" lineHeight="1.65" size="1.25em" family={themeContext.fonts.body.value || "Arial"} {...props} />
    );
}

export default Paragraph;