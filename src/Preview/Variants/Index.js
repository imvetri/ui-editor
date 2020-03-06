// Libraries.

import React, { Component } from "react";

// Components.

import Variant from "./Variant";

import "./style.css";

class Variants extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let component = this.props.component;

        if( component.name==""){
            return (<div>No component selected. variants tab</div>)
        }
        if(!component.variants){
            return (<div>
                <div>Component has no variants</div>
                <div>To generate, interact in preview.</div>
            </div>)
        }

        let variants = component.variants.map(variant=> <Variant state={JSON.stringify(variant)} component={component}/>)
        return (
            <div className="variants">
                <div className="title">
                    Variant
                </div>
                {variants}
            </div>
        );
    }

}

export default Variants;