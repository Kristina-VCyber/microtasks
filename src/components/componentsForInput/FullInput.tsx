import React, {ChangeEvent, useState} from "react";

type FullInput = {
    addMessage: (inputTitle:string) => void
}

export const FullInput = (props: FullInput) => {

    let [inputTitle, setInputTitle] = useState("")

    console.log(inputTitle)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setInputTitle(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
        props.addMessage(inputTitle)
    }


    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickBtnHandler}>+
            </button>
        </div>)

}