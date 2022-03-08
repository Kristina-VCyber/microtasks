import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={"New HEADER"}/>
            <Body titleForBody = {"New BODY"}/>
            <Footer titleForFooter = {"New FOOTER"}/>
        </>
    );
}

export default App;
