// Libraries.

import React, { Component } from "react";

import "./Style.css";

import Selector from "./Selector";
import Declaration from "./Declaration";

class Rule extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {
        console.log(this.props.rule);
        return (
            <div className="container">
                <Selector name={Object.keys(this.props.rule)[0]}/>{" {"}
                <Declaration declaration={Object.values(this.props.rule)[0]}/>
                {"}"}
            </div>
        );
    }
}

export default Rule;
