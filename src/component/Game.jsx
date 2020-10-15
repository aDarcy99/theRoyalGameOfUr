import React, { useState } from 'react';
//components
import Settings from "./Settings/Settings.jsx";
import Board from "./Board/Board.jsx";

//functions
import math from "../functions/math.js";
import { Button } from './core/core.js';
import gameFunctions from "../functions/game"
//implement check for duplicate pieces

const defaultBoard = [
    {
        id: "4a",
        playerId: ""
    }, {
        id: "3a",
        playerId: ""
    }, {
        id: "2a",
        playerId: ""
    }, {
        id: "1a",
        playerId: ""
    }, {
        id: "0a",
        playerId: ""
    }, {
        id: "16a",
        playerId: ""
    }, {
        id: "15a",
        playerId: ""
    }, {
        id: "14a",
        playerId: ""
    }, {
        id: "13a",
        playerId: ""
    }, {
        id: "5",
        playerId: ""
    }, {
        id: "6",
        playerId: ""
    }, {
        id: "7",
        playerId: ""
    }, {
        id: "8",
        playerId: ""
    }, {
        id: "9",
        playerId: ""
    }, {
        id: "10",
        playerId: ""
    }, {
        id: "11",
        playerId: ""
    }, {
        id: "12",
        playerId: ""
    }, {
        id: "4b",
        playerId: ""
    }, {
        id: "3b",
        playerId: ""
    }, {
        id: "2b",
        playerId: ""
    }, {
        id: "1b",
        playerId: ""
    }, {
        id: "0b",
        playerId: ""
    }, {
        id: "16b",
        playerId: ""
    }, {
        id: "15b",
        playerId: ""
    }, {
        id: "14b",
        playerId: ""
    }, {
        id: "13b",
        playerId: ""
    }
]

const Game = (props) => {
    const [started, setStarted] = useState(false);
    const [playerTurn, setPlayerTurn] = useState("");
    const [boardState, setBoardState] = useState(defaultBoard);
    const [settings, setSettings] = useState({ version: "default", pieceCount: 7, opponent: "Computer" })

    function startGame() {

    }
    function switchPlayerTurn() {
        //
        playerTurn === "p1" ? setPlayerTurn("p2") : setPlayerTurn("p1");
    }
    function handleTileClick(playerId, tileId) {

    }
    function handleSettingsChange(Setting, Value) {
        setSettings({ ...settings, [Setting]: Value })
    }

    return (
        <React.Fragment>
            <Settings handleSettingsChange={handleSettingsChange} />
            <Board boardState={boardState} rows={3} tiles={8}/>
        </React.Fragment>
    );
}

export default Game;