
// Libraries.

import React, { Component } from 'react';


import Window from "../Window";

class Composer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            configs:[]
        };
    }

    updateName (e) {
        this.setState({
            name: e.target.value
        })
    }
    onComponentChange (e) {
        this.setState({
            component: e.target.value
        })
    }
    onStateChange (e) {
        this.setState({
            state: e.target.value
        })
    }
    addConfig () {
        let configs = this.state.configs;
        configs.push({
            name: this.state.name,
            component: this.state.component,
            state: this.state.state
        })
        this.setState({
            configs: configs
        })
    }

    render() {

        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <Window>
                <div className="container editor-tab">
                    <div className="editor state">
                        <div className="title">Component Composer</div>
                        <div>
                            <label>State Name</label>
                            <input type="text" 
                                value={this.state.name} 
                                onChange={this.updateName.bind(this)}/>
                            <br/>
                            <label>Component</label>
                            <select onChange={this.onComponentChange.bind(this)}>
                                {window.components.map(component=><option value={component.name}>{component.name}</option>)}
                            </select>
                            <label>State</label>
                            <select onChange={this.onStateChange.bind(this)}>
                                <option value="show">Show</option>
                                <option value="hide">Hide</option>
                            </select>
                        </div>
                        <button onClick={this.addConfig.bind(this)}>Add</button>
                        <div>
                            <ul>
                                {this.state.configs.map(config=><li>
                                    <label>State Name</label>
                                <input type="text" 
                                    value={config.name} />
                                <br/>
                                <label>Component</label>
                                <input type="text" 
                                    value={config.component} />
                                <label>State</label>
                                <input type="text" 
                                    value={config.state} />
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Window>
        );
    }
}

export default Composer;
