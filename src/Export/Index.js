import React, { Component } from 'react';

import { onExport } from "../utilities/Export/index";

import "./Style.css";

class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exportType: "SIMPLE"
        }
    }

    onExportTypeChanged(e) {
        this.setState({
            exportType: e.target.value
        })
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
                                value="logCode"
                                checked={this.state.exportType === "logCode"}
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
                <button onClick={onExport.bind(null, this.state.exportType)}><i className="fas fa-file-export"></i>Export</button>
            </div>

        );
    }
}

export default Export;
