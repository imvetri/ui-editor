
// Libraries.

import React, { Component } from 'react';


import Window from "../Window";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            configs:[]
        };
    }

    render() {

        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <Window>
                <div className="container editor-tab">
                </div>
            </Window>
        );
    }
}

export default Preview;
