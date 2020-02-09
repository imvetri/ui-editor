import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
        <div className="newFolder">
            <i class="fa fa-folder" aria-hidden="true"></i>
            <i class="fa fa-folder-open" aria-hidden="true"></i>

            <input type="text" className="folder" autoFocus={true} placeholder="Enter folder name"/>
        </div>
        );
    }
}

export default Folder;
