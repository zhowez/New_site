import { useState } from "react";
import pineapple from "./assets/pineapple.svg";
import orange from "./assets/Orange.svg";
import orange_slice from "./assets/orange_slice.svg";
import style from "./App.module.css";
import HeaderBox from "./components/UI/HeaderBox";
import ContentBox from "./components/UI/ContentBox";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className={style.main}>
      <HeaderBox className={style.header}>
        <ul className={style.refs}>
          <li>
            <button onClick={() => {}}> Test1</button>
          </li>
          <li>
            <button onClick={() => {}}> Test1</button>
          </li>
          <li>
            <button onClick={() => {}}> Test1</button>
          </li>
        </ul>
        <div className={style.logo}>
          <img src={orange_slice} />
        </div>

        <ul className={style.links}>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </HeaderBox>

      <ContentBox>
        <img src={orange} alt="" />
        <img src={pineapple} alt="" />
      </ContentBox>
    </div>
  );
}

export default App;
