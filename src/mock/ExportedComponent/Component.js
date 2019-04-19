import React, { Component } from 'react';

class NestedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name":"vetri",
            "text":"vel"
            };
    }

    spanID2Click(){
        this.setState({
            "name":"lala"
        })
    }

    buttonID3Click(){
        this.setState({
            "text":"VEL"
        })
    }

    render() {

        return (
            <div id="ID1">
                <span onClick={this.spanID2Click.bind(this)} id="ID2">{this.state.name}</span>
                <button onClick={this.buttonID3Click.bind(this)} id="ID3">{this.state.text}</button>
            </div>
        );
    }
}

export default NestedComponent;
