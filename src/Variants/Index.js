// Libraries.

import React, { Component } from "react";

// Styles.

import "./Style.css";

class Variants extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {

        return (
            <div className="container events-tab">
                <div className="title">Variants</div>
                <ul className="tags">
                </ul>
            </div>
        );
    }
}

export default Variants;
