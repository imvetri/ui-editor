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

        let declarations = Object.keys(this.props.declaration).map(key=> <span><span>{key}</span><span>{this.props.declaration[key]}</span></span>)
        return (
            <div className="container">
                {declarations}
            </div>
        );
    }
}

export default Declaration;
