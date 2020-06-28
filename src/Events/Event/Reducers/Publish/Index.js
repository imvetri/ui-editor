// Libraries.

import React, { Component } from "react";

// Events.

class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let publish = this.props.publish;

        return (
            <div>
                <div class="spacing">
                    <label>Publishable</label>
                    <input type="checkbox" checked={publish.publishable ? "checked" : ""} />
                </div>
                <div class="spacing">
                    <label>Publish Name</label>
                    <input type="text" value={publish.publishName}/>
                </div>
                <div class="spacing">
                    <label>Publish Condition</label>
                    <input type="text" value={publish.publishCondition}/>
                </div>
            </div>
        );
    }
}

export default Publish;
