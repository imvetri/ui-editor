// Libraries.

import React, { Component } from "react";

// Components.

import Variant from "./Variant";

import "./style.css";

class Variants extends Component {
    constructor(props) {
        super(props);
        let component = this.props.component;
        this.state= {
            variants: component.variants,
            component: component
        }
    }

    deleteVariant(data){
        let variants = Array.from(this.state.variants);
        let variantToDelete = variants.findIndex(variant=> variant.name.includes(data.name))
        if(variantToDelete!==-1){
            variants.splice(variantToDelete,1);
        }
        let component = JSON.parse(JSON.stringify(this.state.component))
        component.variants = variants;
        this.props.onUpdate(component)
    }

    updateVariant(incomingVariant , index){
        let variants = Array.from(this.state.variants);
        variants[index] = incomingVariant;
        let component = JSON.parse(JSON.stringify(this.state.component))
        component.variants = variants;
        this.props.onUpdate(component)
    }

    render() {

        let component = this.state.component;
        let variants = this.state.variants;

        if( component.name==""){
            return (<div className="container variants">
                <div className="title">
                    Variants
                </div>
                <p>No component selected</p></div>)
        }
        if(!component.variants){
            return (<div className="container variants">
                <div className="title">
                    Variants
                </div>
                <p>No variants found.</p>
            </div>)
        }

        variants = variants.map((variant, index)=> <Variant 
                index={index}
                state={JSON.stringify(variant.state)}
                name={variant.name} 
                component={component} 
                deleteVariant={this.deleteVariant.bind(this)}
                updateVariant={this.updateVariant.bind(this)}/>);
        
        return (
            <div className="container variants">
                <div className="title">
                    Variants
                </div>
                <div className="variantsList">
                    {variants}
                </div>
            </div>
        );
    }

}

export default Variants;