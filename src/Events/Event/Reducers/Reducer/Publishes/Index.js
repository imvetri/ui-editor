// Libraries.

import React, { Component } from "react";

import Publish from "../Publish";

class Publishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishes: this.props.publishes
        }
    }

    render() {

        let publishes = this.state.publishes;

        return (
            <div>
                {
                    publishes.map((publish, i) => <Publish
                        index={i}
                        key={Math.ceil(Math.random() * 1000)}
                        publish={publish}
                        onSave={(data, i) => this.setState({
                            publishes: (publishes[i] = data, publishes) // update list of publishes and return it.
                        })}
                        onDelete={(i) => this.setState({
                            publishes: (publishes.splice(i, 1), publishes) // delete the publishes and return it.
                        })} />)
                }
            </div>
        )
    }
}

export default Publishes;
