// Libraries.

import React, { Component } from "react";

import { popHistory } from "../utilities/Storage";

import "./style.css";

class Toolkit extends Component {
    constructor(props) {
        super(props);
        this.state={
            exportType: "REACT_CLASS_COMPONENT"
        }
    }

    refreshToPrevious(){
        popHistory();
    }

    onExportTypeChanged(e){
        this.setState({
            exportType: e.target.value
        })
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
                                        value="REACT_CLASS_COMPONENT" 
                                        checked={this.state.exportType === "REACT_CLASS_COMPONENT"}
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
                                        value="REACT_FUNCTION_COMPONENT" 
                                        checked={this.state.exportType === "REACT_FUNCTION_COMPONENT"} 
                                        onChange={this.onExportTypeChanged.bind(this)}
                                        disabled
                                    />React - Functional component
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