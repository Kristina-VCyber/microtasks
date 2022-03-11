import {useState} from "react";

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


    let currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")




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

        </>

    )


}