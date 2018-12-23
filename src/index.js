// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.

import style from "./style.css";

// Components.

import Components from "./components/Components";
import Elements from "./elements/Elements";
import CodeMirror from "react-codemirror";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { code: "// Code" };
    }
    updateCode (newCode) {
		this.setState({
			code: newCode,
		});
    }
    render(){
        const options = {
			lineNumbers: true,
		};
        return (
            <div className={style.showBackground}>
                <Elements/>
                <Components/>
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));