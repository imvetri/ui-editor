
// Libraries.

import React, { Component } from 'react';

import Window from "../Window";



class Style extends Component {
    constructor(props) {
        super(props);

        this.state = {
            style:  this.props.style
        };

    }

    render() {
        let style= this.state.style;

        return (
            <Window>
            <div className="container editor-tab">
                    <div className="editor css">
                        <div className="title">Component CSS</div>
                        <input 
                            type="text"
                            value={style}
                            onChange={(event, data, style) => {
                                this.setState({
                                    style: style
                                })
                            }}
                        />
                </div>
            </div>
            </Window>
        );
    }
}

export default Style;
