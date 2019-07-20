
// Libraries.

import React, { Component } from 'react';

// Dependencies.

import Editor from "../Editor";

// Styles.

import style from "./Style.css";

/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
class ChildComponentReference extends Component {
    constructor(props) {
        super(props);
        // this.state = {... this.props.element};
        this.state = Object.assign({}, this.props.element);
    }

    render() {

        let element = this.state;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div className={style.container}>
                <div className={style.disableEditOverlay}>
                    <Editor
                        key = {this.state.selectedIndex}
                        element = {this.props.element}
                        onSave = {()=>{}}
                        />
                </div>
            </div>
        );
    }
}

export default ChildComponentReference;