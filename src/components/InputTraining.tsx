import {useState} from "react";
import {FullInput} from "./componentsForInput/FullInput";

type Props = {
    message: string
}

export const InputTraining = (props: Props) => {

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const addMessage = (inputTitle: string) => {
        console.log(inputTitle)
        let newMessage = {message:inputTitle}
        setMessage([newMessage,...message])
    }

    return (
        <div className={"InputTraining"}>
            {/*<div>*/}
            {/*    <input type="text"/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>

    )


}