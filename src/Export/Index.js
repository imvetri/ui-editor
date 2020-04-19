import React, { Component } from 'react';

import {onExport} from "../utilities/Export/index";

import "./Style.css";

class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exportType: "SIMPLE"
        }
        // TODO, cleanup all local storage to write to window.
        window.EXPORT_TYPE = "SIMPLE";
    }

    onExportTypeChanged(e) {
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
                            ReactJS - logs output to your console.
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
                            />
                            ReactJS - Codebase
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
                            />ReactJS with Storybook - Codebase
                        </label>
                    </li>
                </ul>
                <button onClick={onExport}><i className="fas fa-file-export"></i>Export</button>
            </div>
                
        );
    }
}

export default Export;
