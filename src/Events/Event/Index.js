// Libraries.

import React, { Component } from "react";

// Components.

// Events.

class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publishes: this.props.reducer.publishes,
            reducer: this.props.reducer.reducer
        }
    }



    render() {

        let reducer = this.state.reducer;
        let publishes = this.state.publishes;

        return (
            // TODO: 1.check save and delete.
            <div>
                <div class="spacing" onMouseLeave={this.syncChanges.bind(this)}>
                    <label>Reducer Definition</label>
                    <input
                        value={reducer}
                        onChange={(event, data, reducer) => {
                            this.setState({
                                reducer: reducer
                            })
                        }}
                    />
                </div>
                <div className="title">
                    Publishes
                </div>
                <div>
                    {reducer!=="" ? <button id="addPublish" onClick={this.addNewPublish.bind(this)}>Add publish</button> : null }

                    {publishes.length>0? <Publishes publishes={publishes}/> : null }
                </div>
            </div>
        );
    }
}

export default Reducer;
