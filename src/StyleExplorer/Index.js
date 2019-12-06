// Libraries.

import React, { Component } from "react";

// Components. 


// Styles.

import "./Style.css";

class StyleExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {

        return (
            <div className="container">
                <div className="title">StyleExplorer</div>
                <div className="tags">
                </div>
            </div>
        );
    }
}

export default StyleExplorer;
