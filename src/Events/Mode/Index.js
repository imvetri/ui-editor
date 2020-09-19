// Libraries.

import React, { Component } from "react";

import "./Style.css";


class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMode: "",
            modes: this.props.modes
        }
    }

    saveMode() {
        this.state.modes.push(this.state.selectedMode);
        this.props.onUpdate(this.state.modes);
    }

    deleteMode() {
        // Find the selected mode index from the list of nodes
        // delete the index
        // update parent
        let deleteIndex = this.state.modes.findIndex(mode=>mode===this.state.selectedMode);
        this.state.modes = this.state.modes.splice(deleteIndex,1);
        this.props.onUpdate(this.state.modes);
    }

    updateMode(e) {
        this.setState({
            selectedMode:e.target.value
        })
    }


    render() {

        return (

            <div>
                <div className="title">
                    Mode
                </div>
                <div className="mode">
                    <input list="modes" type="text" onChange={this.updateMode.bind(this)} value={this.state.selectedMode} title="Mode" />
                    <datalist id="modes">
                        {this.state.modes.map(mode => <option value={mode}></option>)}
                    </datalist>
                    <button onClick={this.saveMode.bind(this)}><i className="fas fa-save"></i>Save</button>
                    <button onClick={this.deleteMode.bind(this)}><i className="fas fa-trash"></i>Delete</button>
                </div>
            </div>
        );
    }
}

export default Mode;
