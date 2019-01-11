
// Libraries.

import React, { Component } from 'react';
import classNames from 'classnames';

// Dependencies.

import { ObjectInspector, TableInspector } from 'react-inspector';
import CodeMirror from "react-codemirror";

// Styles.
import elementStyle from "./element.css";
import cssUtil from "../css-utils/style.css";

class PopupJsonEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: this.props.json || {},
            show: this.props.show
        }
    }

    updateJson(json) {
        this.setState({
            json: JSON.parse(json)
        })
    }

    render() {

        let options = {
            mode: "application/ld+json",
            lineNumbers: true
        };

        return (
            <div className={this.props.show || this.state.show ?  '' : cssUtil.hidden}>
                <div className={elementStyle.override}>
                    <CodeMirror value={JSON.stringify(this.state.json)} onChange={this.updateJson.bind(this)} options={options} />
                    <ObjectInspector data={this.state.json} />
                </div>
            </div>
        );
    }
}

export default PopupJsonEditor;
