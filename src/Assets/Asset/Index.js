import React, { Component } from 'react';

import  "./Style.css";

class Asset extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className="background">
            </ div>
        );
    }
}

export default Asset;
