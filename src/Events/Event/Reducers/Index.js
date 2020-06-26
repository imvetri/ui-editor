// Libraries.

import React, { Component } from "react";

// Components.

import Reducer from "./Reducer/Index";

class Reducers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="reducers">
                <div className="title">
                    Reducers
                </div>
                {this.props.event.reducers.map(item=><Reducer item={item}/>)}
            </div>
        );
    }
}

export default Reducers;
