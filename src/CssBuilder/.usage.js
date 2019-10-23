import CssBuilder from "./index";
import ReactDOM from "react-dom";
import React from "react";


function cssChanged(state, change){
    console.log(state, change);
}
// Usage Example //
ReactDOM.render(<CssBuilder onChange={cssChanged}/>, document.getElementById("index"));