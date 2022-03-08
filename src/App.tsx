import React from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";



// const students = [
//     {id: 1, name: "Tina", age: 29},
//     {id: 2, name: "John", age: 25},
//     {id: 3, name: "Harry", age: 34},
// ];

const topCars = [
    {manufacturer: "BMW", model: "m5cs"},
    {manufacturer: "Mercedes", model: "e63s"},
    {manufacturer: "Audi", model: "rs6"},
]

function App() {
    return (
        <>
            <NewComponent topCars={topCars} />
        </>
    );
}

export default App;
