import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
//Components
import CoreTheme from "./component/core/Theme/CoreTheme.jsx";
//pages
import IndexPage from "./pages/IndexPage.jsx";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: Arial;
    }
    html, body, #page-content{
        height: 100%;
    }
`;


function App(){
    return(
        <CoreTheme>
            <BrowserRouter>
                <GlobalStyle />
                <Route exact path="/">
                    <IndexPage />
                </Route>
            </BrowserRouter>
        </CoreTheme>
    )
}

ReactDOM.render(<App />, document.querySelector("#page-content"));