// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { transpileJSX } from "../utilities/jsxTranspiler";
import { codeModifier } from "../utilities/codeModifier";
import { prepareMarkup } from "../utilities/prepareMarkup";
import {convertToReactcomponent} from "../utilities/convert-to-react-component";
import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";

import style from "./style.css";
import getMessages from "./Messages";
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_TLS_ROLLBACK_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);

        let component = this.props.component;
        this.component = component;
        this.state = JSON.parse(component.state);

        this.markup = prepareMarkup(component, component.name);
        this.events = component.events;	
        this.style = component.style;	
        debugger;
        // this.events.forEach(event=>{
        //     /* Get the function name.*/
        //     let functionName = event.name;
        //     /* Bind it to current instance and save it.*/
        //     this[functionName] = (new Function("e",codeModifier(event.reducer))).bind(this);
        //     /* Also replace in the original events object. */
        //     event.reducer = this[functionName];
        // });

        this.anotherComponetString = `<HelloComponent/>`
    }

    generatedComponentString(){
        return `(class RenderTester extends Component {
    
            constructor(props) {
                super(props);
                this.state = { 
                    "a":"yay"
                };
            }
        
            render() {
                return (<div>
                    {this.state.a}
                </div>)
            }
        })`
    }

    /**
     * 
     * @param {Object} component - containing details about a component
     * @property {String} component.name - Name of the component.
     * @property {String} component.markup - JSX of the component.
     * @property {String} component.style - css classes used by the component, like a stylesheet content.
     * @property {Array} component.events - Array of event objects. Each object contain event name, event id, event reducer function.
     * @property {String} component.children - List of child component configuration that are present. Configuration can be used to perform show/hide child component on a condition, render list of children using array.map function. 
     * @property {String} component.state - Default state of the component. This is required.
     */
    getComponentString(component){

        if(!component.markup[3]){
            return;
        }
        return convertToReactcomponent(component);
    }

    render() {

        let componentString = this.getComponentString(this.component);
        let result = eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"]  }).code)

        if(!result){
            return null;
        }
        let component = new result();

        return (
            <div className={style.box}>
                <h1>
                    {component.render()}
                </h1>
            </div>
        );
    }

}

export default DynamicComponent;