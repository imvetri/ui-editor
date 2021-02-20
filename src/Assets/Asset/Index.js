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
        let asset = assets.find(asset=>asset.name===this.props.asset.name)
        return (
            <div>
                <p data-name={this.props.asset.name} onClick={this.props.onSelected}>{this.props.asset.name}</p>
                <img src={asset.url}/>
            </div>
        );
    }
}

export default Asset;
