import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>)  => {
    //     console.log("Hello, I'm Dobbi")
    // }
    // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello, I'm Ron")
    // }

    // const onClickHandler = (name:string) => {
    //     console.log(name)
    // }

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const ButtonLastExpression = () => {
        console.log("I'm stupid button")
    }

    return (
        <div className={"App"}>
            <Button name={"MyYouTubeChannel-1"} callBack={() => Button1Foo("I'm Dobbi", 21, "live in Tokyo")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={() => Button2Foo("I'm Han Solo", 42)}/>
            <Button name={"StupidButton"} callBack={ButtonLastExpression}/>
        </div>
    );
}

export default App;
