import React from 'react';
import styled from "styled-components";
//components
import Row from "./Row/Row.jsx";
//styled
const BoardStyle = styled.div`

`;

const Board = (props) => {
    function renderRows(){
        let rows = [];
        for (let idx = 0; idx <= props.rows - 1; idx++) {
            rows.push(<Row key={idx} boardState={props.boardState} row={idx + 1} tiles={props.tiles} />)
        }
        return rows;
    }
    return (
        <BoardStyle>
            {renderRows()}
        </BoardStyle>
    );
}

export default Board;