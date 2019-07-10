// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"

class NestedComponentConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    updateShowCondition () {

    }

    updateHideCondition () {

    }

    render() {

        let components= JSON.parse(localStorage.getItem("ui-editor"));

        return (
            <div className={style.event}>
                {this.props.component.name}
                <section>
                    <div>
                        <label>
                        Show.
                        <input type="text" onChange={this.updateShowCondition.bind(this)} value={this.state.showCondition} placeholder="Enter show condition name" title="Ex: state.title==='hey'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <div>                    
                        <label>
                            Hide.
                            <input type="text" onChange={this.updateHideCondition.bind(this)} value={this.state.hideCondition} placeholder="EnExisting Eventster hide condition name" title="Ex: state.title==='hello'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <label>
                        List of publishable events of the component.
                    </label>
                </section>
            </div>
        );
    }
}

export default NestedComponentConfigurator;
