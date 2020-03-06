// Libraries.

import React, { Component } from "react";

import { popHistory } from "../utilities/Storage";

import "./style.css";

class Toolkit extends Component {
    constructor(props) {
        super(props);
        this.state={
            exportType: "SIMPLE"
        }
        // TODO, cleanup all local storage to write to window.
        window.EXPORT_TYPE = "SIMPLE";
    }

    refreshToPrevious(){
        popHistory();
    }

    onExportTypeChanged(e){
        this.setState({
            exportType: e.target.value
        })
        // TODO, cleanup all local storage to write to window.
        window.EXPORT_TYPE = e.target.value;
    }

    render() {

        return (
            <div className="container preview">
                <div className="title">
                    Toolkit
                </div>
                <div>
                    <div className="title">
                        History
                    </div>
                    <div>
                        <button onClick={this.refreshToPrevious.bind(this)}>Go back</button>
                    </div>
                </div>

                <div>
                    <div className="title">
                        Export Code Configuration
                    </div>
                    <div>  
                        <ul>
                            <li>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="Export" 
                                        value="SIMPLE" 
                                        checked={this.state.exportType === "SIMPLE"}
                                        onChange={this.onExportTypeChanged.bind(this)}
                                    />
                                    React - Class component
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="Export" 
                                        value="NWB" 
                                        checked={this.state.exportType === "NWB"} 
                                        onChange={this.onExportTypeChanged.bind(this)}
                                    />React - Importable component
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="Export" 
                                        value="STORYBOOK" 
                                        checked={this.state.exportType === "STORYBOOK"} 
                                        onChange={this.onExportTypeChanged.bind(this)}
                                    />React - Storybook
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Toolkit;