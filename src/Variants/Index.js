// Libraries.

import React, { Component } from "react";

// Components.

import DynamicComponent from "../DynamicComponent";
import {validate} from "../Preview/validate";

// Styles.

import "./Style.css";

class Variants extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {

        try{
            validate(this.props.component)
        }
        catch(e){
            console.error(e);
        }
        let randomKey = this.props.component.id*(~~(Math.random()*10));


        var component = JSON.parse(JSON.stringify(this.props.component));


        if(component.variants && component.variants.length>0){
            component.variants = component.variants.filter(Boolean);
            return (
                <div className="container events-tab">
                    <div className="title">Variants</div>
                    {component.variants.map(variant=>{
                        let newComponent = JSON.parse(JSON.stringify(component))
                        newComponent.state = JSON.stringify(Object.assign(JSON.parse(newComponent.state),variant))
                        return <DynamicComponent key={randomKey} component={newComponent} noFreshFetch={true}/>
                    })}
                </div>
            )
        }
        return (
            <div className="container events-tab">
                <div className="title">Variants</div>
                <DynamicComponent key={randomKey} component={component}/>
            </div>
        );
    }
}

export default Variants;
