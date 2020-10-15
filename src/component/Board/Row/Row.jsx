import React from 'react';
import styled from "styled-components";
//components
import Tile from "../Tile/Tile.jsx";
//styled
const RowStyle = styled.div`
    display: flex;
    flex-direction: row;
`;
const Row = (props) => {
    function renderTiles() {
        let tiles = [];
        for (let idx = 0; idx <= props.tiles - 1; idx++) {
            tiles.push(<Tile key={idx} tile={props.boardState[idx]} />)
        }
        return tiles;
    }

    return (
        <RowStyle>
            {renderTiles()}
        </RowStyle>
    );
}

export default Row;