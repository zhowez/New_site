import { useState } from "react";
import pineapple from "./assets/pineapple.svg";
import orange from "./assets/Orange.svg";
import orange_slice from "./assets/orange_slice.svg";
import style from "./App.module.css";
import HeaderBox from "./components/UI/HeaderBox";
import ContentBox from "./components/UI/ContentBox";
import JobBox from "./components/UI/JobBox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className={style.main}>
      <HeaderBox className={style.header}>
        <ul className={style.refs}>
          <li>
            <button onClick={() => {}}> About</button>
          </li>
          <li>
            <button onClick={() => {}}> Jobs</button>
          </li>
          <li>
            <button onClick={() => {}}> Projects</button>
          </li>
        </ul>
        <div className={style.logo}>
          <img src={orange_slice} />
        </div>

        <div className={style.links}>
          <a href="https://github.com/zhowez">
            <GitHubIcon
              className="material-icons"
              style={{ fontSize: "50px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/jameszhowes/">
            <LinkedInIcon
              className="material-icons"
              style={{ fontSize: "50px" }}
            />
          </a>
        </div>
      </HeaderBox>

      <div>
        <JobBox />
      </div>
    </div>
  );
}

export default App;
