// Libraries.

import React, { Component } from "react";

import {getObjectFormat} from "./util";
// Styles.

import "./Style.css";

class StyleExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {

        let style = this.props.style;
        console.log(getObjectFormat(style));
        return (
            <div className="container">
                <div className="title">StyleExplorer</div>
                <div className="tags">
                    {/* {getObjectFormat(style)} */}
                </div>
            </div>
        );
    }
}

export default StyleExplorer;
