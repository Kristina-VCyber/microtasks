import {useState} from "react";
type FilterType = "all"| "ruble"| "dollar";

export const FilterTraining = () => {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456"},
        {banknote: "dollar", nominal: 50, number: "z123456"},
        {banknote: "ruble", nominal: 100, number: "w123456"},
        {banknote: "dollar", nominal: 100, number: "e123456"},
        {banknote: "dollar", nominal: 100, number: "a123456"},
        {banknote: "ruble", nominal: 100, number: "r123456"},
        {banknote: "dollar", nominal: 50, number: "x123456"},
        {banknote: "ruble", nominal: 50, number: "v123456"}

    ])


    const [filter , setFilter]  = useState( "all") ;

let currentMoney = money;
    if (filter === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "rubles")
    }
    if (filter === "dollar"){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }

const onClickFilterHandler = (buttonName:FilterType) => {

setFilter(buttonName);
    // console.log(buttonName)
}



    return (
        <>
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>

            <div style={{marginLeft:"35px"}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() =>onClickFilterHandler("ruble")}>rouble</button>
                <button onClick={() =>onClickFilterHandler ("dollar")}>dollar</button>
            </div>
        </>

    )


}