import React, { Component } from 'react';

// Styles.

import  "./Style.css";

class Asset extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p data-name={this.props.asset.name} onClick={this.props.onSelected}>{this.props.asset.name}</p>
            </div>
        );
    }
}

export default Asset;
