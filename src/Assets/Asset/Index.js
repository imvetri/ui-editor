import React, { Component } from 'react';

import  "./Style.css";

class Asset extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
debugger;

        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
            <div className={this.props.selected === this.props.asset.name? "tinyThumbnail selectedAsset" : "tinyThumbnail"}>
                <img src={this.props.asset.result} data-name={this.props.asset.name} onClick={this.props.onSelected}></img>
            </div>
        );
    }
}

export default Asset;
