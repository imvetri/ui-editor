import React, { Component } from 'react';

import  "./Style.css";

class Asset extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div>
                <p data-name={this.props.asset.name} onClick={this.props.onSelected}>{this.props.asset.name}</p>
            </div>
        );
    }
}

export default Asset;
