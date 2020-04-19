// Libraries.

import React, { Component } from "react";

// Components.
import DynamicComponent from "../../Preview/DynamicComponent";


import "./style.css";

class Variant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || "",
            state: this.props.state
        }
    }

    deleteVariant(){
        let variant = this.state;
        this.props.deleteVariant(variant);
    }

    render() {
        let component = JSON.parse(JSON.stringify(this.props.component))
        if( component.name==""){
            return (<div></div>)
        }
        component.state = this.props.state;
        return (
            <div className="variant">
                <div className="variant-controls">
                    <input type="text" 
                        placeholder="Enter variant Name" 
                        value={this.state.name} />
                    <button onClick={this.deleteVariant.bind(this)}>
                        <i className="fas fa-trash"></i>
                        Delete
                    </button>
                </div>
                <div className="view">
                    <DynamicComponent component={component}/>
                </div>
            </div>
        );
    }

}

export default Variant;