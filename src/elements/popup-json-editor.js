
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
            json: undefined,
            show: this.props.show
        }
    }

    updateJson(e) {
        this.setState({
            json: JSON.parse(e.target.value)
        })
    }

    render() {
        return (
            <div className={this.props.show || this.state.show ?  '' : cssUtil.hidden}>
                <div className={elementStyle.override}>
                    <textarea onChange={this.updateJson.bind(this)} value={JSON.stringify(this.state.json||this.props.json, undefined, 4)} />
                    <ObjectInspector data={this.state.json||this.props.json} />
                </div>
            </div>
        );
    }
}

export default PopupJsonEditor;
