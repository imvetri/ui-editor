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
        return (
            <div className="rules container">
                <Selector name={Object.keys(this.props.rule)[0]}/>{" {"}
                <Declaration declarations={Object.values(this.props.rule)[0]} key={Math.ceil(Math.random() * 1000)}/>
                {"}"}
            </div>
        );
    }
}

export default Rule;
