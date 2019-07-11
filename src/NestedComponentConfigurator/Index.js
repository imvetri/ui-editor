// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"

class NestedComponentConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    updateShowCondition (event) {
        this.setState({
            showCondition: event.currentTarget.value
        })
    }

    updateHideCondition (event) {
        this.setState({
            hideCondition: event.currentTarget.value
        })
    }

    render() {

        return (
            <div className={style.event}>
                {this.props.component.name}
                <section>
                    <div>
                        <label>
                        Show.
                        <textarea onChange={this.updateShowCondition.bind(this)} value={this.state.showCondition} placeholder="Enter show condition name" title="Ex: state.title==='hey'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <div>                    
                        <label>
                            Hide.
                            <textarea onChange={this.updateHideCondition.bind(this)} value={this.state.hideCondition} placeholder="EnExisting Eventster hide condition name" title="Ex: state.title==='hello'; expression should eval to boolean"/>
                        </label>
                    </div>

                    <label>
                        List of publishable events of the component.
                        {this.props.component.events.filter(event=>event.publishable).map(event=><li>{event.publishName}</li>)}
                    </label>
                </section>
            </div>
        );
    }
}

export default NestedComponentConfigurator;
