import React from "react";
import ReactDOM from "react-dom";
import style from "./hello.css";

const Index = () => {
    return <div className={style.showBackground}>Hello Word</div>
}

ReactDOM.render(<Index/>, document.getElementById("index"));