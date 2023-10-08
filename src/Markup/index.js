
// Libraries.

import React, { Component } from 'react';

import Window from "../Window";


class Markup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markup:this.props.markup
        };

    }

    render() {
        let markup= this.state.markup;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <Window>
            <div className="container editor-tab">
                    <div className="editor markup">
                        <div className="title">Component Markup</div>
                        <input
                            type="text"
                            value={markup}
                            onChange={(event, markup) => {
                                this.setState({
                                    markup: markup
                                })
                            }}
                        />
                </div>
            </div>
            </Window>
        );
    }
}

export default Markup;
