import {useState} from "react";

export const UseStateTraining = () => {

    let [number, setNumber] = useState(1);

    const onclickHandler = () => {
        setNumber(++ number)
        console.log(number)
    }

    const onclickHandlerZero = () => {
            setNumber(number * 0)
            console.log(number)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onclickHandler}>click here</button>
            <button onClick={onclickHandlerZero}>0</button>
        </div>
    )
}