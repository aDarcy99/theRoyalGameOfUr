import React from "react";
import { Link } from "react-router-dom";
//components
import Game from "../component/Game.jsx";
import { Button, Heading, Container, Content, Paragraph as P } from "../component/core/core.js";

export default class IndexPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Container width="70%">
                    <Heading>The Royal Game of Ur</Heading>
                    <Game />
                </Container>

            </React.Fragment>
        )
    }
} 