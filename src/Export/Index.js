import React, { Component } from 'react';

import  "./Style.css";

class Export extends Component {
    constructor(props) {
        super(props);
        this.state={
            exportType: "SIMPLE"
        }
        // TODO, cleanup all local storage to write to window.
        window.EXPORT_TYPE = "SIMPLE";
    }

    onExportTypeChanged(e){
        this.setState({
            exportType: e.target.value
        })
        // TODO, cleanup all local storage to write to window.
        window.EXPORT_TYPE = e.target.value;
    }


    render() {
        // Remove this.props.index, instead use this element instance index. Removes duplicate code
        return (
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
        );
    }
}

export default Export;
