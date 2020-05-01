// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "./DynamicComponent";

// Utilities.

import { readComponent } from "../utilities/Storage";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component,
            display: "mobile"
        }
    }

    refresh( ){
        this.setState({
            component: readComponent(this.state.component.name)
        })
    }

    switchTablet() {
        this.setState({
            display: "tablet"
        })
    }

    switchMobile() {
        this.setState({
            display: "mobile"
        })
    }

    switchDesktop(){
        this.setState({
            display: "desktop"
        })
    }

    render() {

        // Helps to rerender when changes to markup/events are made to the component and preview them.
        let randomKey = this.props.component.id*(~~(Math.random()*10));
        return (
            <div className={`container preview ${this.state.display}`}>
                <div className="title">
                    Preview
                    <div className="Controls">
                        <button onClick={this.switchTablet.bind(this)}><i className="fa fa-tablet-alt"></i></button>
                        <button onClick={this.switchMobile.bind(this)}><i className="fa fa-mobile-alt"></i></button>
                        <button onClick={this.switchDesktop.bind(this)}><i className="fa fa-desktop"></i></button>
                    </div>
                </div>
                <div className="dynamicComponent">
                    <DynamicComponent onSave={this.props.onSave} key={randomKey} component={this.state.component}/>
                </div>
            </div>
        );
    }

}

export default Preview;