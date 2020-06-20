import React, { Component } from 'react';


import "./Style.css";

class Change extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.item.time,
            name: this.props.item.name
        };
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }
    updateParent(){
        this.props.itemChanged({
            name: this.state.name,
            time: this.props.item.time,
            data: this.props.item.date
        }, this.props.index)
    }

    render() {
        let active = JSON.stringify(this.props.item.data)===JSON.stringify(window.components) ? "change active" : "change";
        return (
            <li className={active}>
                <input value={this.state.name} onChange={this.updateName.bind(this)} onMouseLeave={this.updateParent.bind(this)}/>
                <span>{this.state.time}</span>
            </li>
        );
    }
}

export default Change;
