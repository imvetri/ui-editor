// Libraries.

import React, { Component } from "react";

// Dependencies.

import style from "./Style.css";
import PropConfigurator from "../PropConfigurator";

class PropsConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateProp(propValue){
        this.props.onPropsUpdate(propValue);
    }

    render() {
        let existingEvents = this.props.properties.map((property,index)=> <PropConfigurator property={property} onSave={this.updateProp.bind(this)} key={index} index={index}/>);
        return (
            <div className={style.events}>
                <div className={style.existingEvents}>
                    <h6>Props</h6>
                    {existingEvents}
                </div>
            </div>
        );
    }
}

export default PropsConfigurator;
