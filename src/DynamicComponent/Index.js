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

class DynamicComponent extends Component {
    constructor(props) {
        super(props);

        let component = this.props.component;
        this.component = component;
        this.state = JSON.parse(component.state);

        this.markup = prepareMarkup(component, component.name);
        this.events = component.events;	
        this.style = component.style;	
        this.events.forEach(event=>{
            /* Get the function name.*/
            let functionName = event.name;
            /* Bind it to current instance and save it.*/
            this[functionName] = (new Function("e",codeModifier(event.reducer))).bind(this);
            /* Also replace in the original events object. */
            event.reducer = this[functionName];
        });

        this.anotherComponetString = `<HelloComponent/>`
    }

    generatedComponentString(){
        return `
        (function RenderTester (_Component) {
            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
        
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
        
        function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
        
        function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
        
            _inherits(RenderTester, _Component);
        
            function RenderTester(props) {
                _classCallCheck(this, RenderTester);
        
                var _this = _possibleConstructorReturn(this, (RenderTester.__proto__ || Object.getPrototypeOf(RenderTester)).call(this, props));
        
                _this.state = {
                    "a": "yay"
                };
                return _this;
            }
        
            _createClass(RenderTester, [{
                key: "render",
                value: function render() {
        
                    return React.createElement(
                        "div",
                        null,
                        this.state.a
                    );
                }
            }]);
        
            return RenderTester;
        })(window.Component);`
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
        let result = eval(Babel.transform(componentString, { presets: ['react'] }).code)
        let anotherResult = eval(this.generatedComponentString());
        let a = new anotherResult();

        let transpilationResult = transpileJSX.call(this, this.markup, this.style, this.state, this.events, this.component.name);
        if(transpilationResult.error !== undefined){
            return (getMessages(transpilationResult.error))
        }
        else {
            return (
                <div className={style.box}>
                    {transpilationResult.result}
                    <h1>
                        {a.render()}
                    </h1>
                </div>
            );
        }
    }

}

export default DynamicComponent;