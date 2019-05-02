// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.
import style from "./Index/index.css";
import resetStyle from "./Index/reset.css";

// Components.

import Elements from "./Elements";
import Preview from "./Preview";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
            previewComponent: {
                name: "",
                markup:"",
                style: "",
                state: "{}",
                events: [{
                    id: "ID1",
                    name: "",
                    reducer: ""
                }]
            }
        }
    }

    updatePreview(element) {
        this.setState({
            previewComponent:  element
        });
    }

    render(){
        return (
            <div className={style.showBackground}>
                <Elements createMode={false} onPreview={this.updatePreview.bind(this)}/>
                <Preview component={this.state.previewComponent}/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));