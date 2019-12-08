// Libraries.

import React, { Component } from "react";

import "./Style.css";

// Components.

import Property from "./Property";
import Value from "./Value";

class Declaration extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {


        return (
            <div className="container">
                {Object.keys(this.props.declaration).map(value=> <div><Property value={value}/>:<Value value={this.props.declaration[value]}/></div>)}
            </div>
        );
    }
}

export default Declaration;
