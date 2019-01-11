
// Libraries.

import React, { Component } from 'react';

// Dependencies.

import { ObjectInspector, TableInspector } from 'react-inspector';
import CodeMirror from "react-codemirror";

// Styles.
import elementStyle from "./element.css";


class PopupJsonEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            json: this.props.json || {}
        }
    }

    updateJson (json) {
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
            <div className={elementStyle.override}>
                <CodeMirror value={JSON.stringify(this.state.json)} onChange={this.updateJson.bind(this)} options={options} />
                <ObjectInspector data={this.state.json} />
            </div>
        );
    }
}

export default PopupJsonEditor;
