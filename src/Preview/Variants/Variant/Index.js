// Libraries.

import React, { Component } from "react";

// Components.
import DynamicComponent from "../../DynamicComponent";


import "./style.css";

class Variant extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let component = JSON.parse(JSON.stringify(this.props.component))
        if( component.name==""){
            return (<div></div>)
        }
        component.state = this.props.state;
        return (
            <div className="variant">
                <DynamicComponent component={component}/>
            </div>
        );
    }

}

export default Variant;