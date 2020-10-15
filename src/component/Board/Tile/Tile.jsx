import React from 'react';
import styled from "styled-components";
//components
const TileStyle = styled.div`
    border: 1px solid black;
    width: 5em;
    height: 5em;
`

const Tile = (props) => {
    return (
    <TileStyle>{props.tile.id}</TileStyle>
    );
}
 
export default Tile;