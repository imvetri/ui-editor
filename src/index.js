// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.
import style from "./Index/index.css";
import resetStyle from "./Index/reset.css";

// Components.

import Elements from "./Elements/Elements";
import Preview from "./Preview/Preview";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
            previewComponent: []
        }
    }

    updatePreview(element) {
        this.setState({
            previewComponent:  [element]
        });
    }

    render(){
        return (
            <div className={style.showBackground}>
                <Elements createMode={false} onPreview={this.updatePreview.bind(this)}/>
                <Preview components={this.state.previewComponent}/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));