import React from 'react';
import logo from './logo.svg';
import './App.css';

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


    const firstBtn = () => {
        console.log(100200)
    }

    const secondBtn = (value:number) => {
        console.log(value)
    }
  return (
    <div className="App">
      {/*<button onClick={(event) => {console.log("Hello")}}>MyYouTubeChanel-1</button>*/}
      {/*<button onClick={ (event) => onClickHandler("Dobbi")}>  MyYouTubeChanel-1</button>*/}
      {/*<button onClick={(event) => onClickHandler("Ron")}>MyYouTubeChanel-2</button>*/}


<button onClick={firstBtn}>1</button>
<button onClick={(event)=>secondBtn(100200)}>2</button>

    </div>
  );
}

export default App;
