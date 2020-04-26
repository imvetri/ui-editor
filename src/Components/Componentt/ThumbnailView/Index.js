// Libraries.

import React, { Component } from "react";

// Components.
import DynamicComponent from "../../../Preview/DynamicComponent";


import "./style.css";

class ThumbnailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || "",
            state: this.props.state
        }
    }

    render() {
        let component = JSON.parse(JSON.stringify(this.props.component))

        if( component.name==""){
            return (<div></div>)
        }
        return (
            <div className="thumbnailView">
                <DynamicComponent component={component}/>
            </div>
        );
    }

}

export default ThumbnailView;