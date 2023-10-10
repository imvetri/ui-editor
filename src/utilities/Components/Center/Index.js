// Libraries.

import React, { Component } from "react";

class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="center">
                {this.props.children}
            </div>
        );
    }

}

export default Center;