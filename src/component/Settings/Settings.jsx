import React, { useState } from 'react';
import styled from "styled-components";
//components
import { Button, Heading, Container, Content, Paragraph as P } from "../core/core.js";

const Settings = (props) => {

    function onVersionChange(Value) {
        return (Event) => {
            props.handleSettingsChange("version", Value)
        }
    }
    function onPieceCountChange(Value) {
        return (Event) => {
            props.handleSettingsChange("pieceCount", Value)
        }
    }
    function onOpponentChange(Value) {
        return (Event) => {
            props.handleSettingsChange("opponent", Value);
        }
    }

    return (
        <Content>
            <Container>
                <Heading variant="h4">Settings</Heading>
                <Heading variant="h6">Version</Heading>
                <Button onClick={onVersionChange("default")}>Default</Button>
                <Heading variant="h6">Piece Count</Heading>
                <Button onClick={onPieceCountChange(5)}>5</Button> or <Button onClick={onPieceCountChange(7)}>7</Button>
                <Heading variant="h6">Opponent</Heading>
                <Button onClick={onOpponentChange("computer")}>Computer</Button> or <Button onClick={onOpponentChange("player")}>Player</Button>
            </Container>
        </Content>

    );
}

export default Settings;