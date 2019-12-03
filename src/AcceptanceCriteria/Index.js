import React, { Component } from 'react';

import "./Style.css";

class AcceptanceCriteria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    openClose() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {

        let slider = this.state.open ? "interact-horizontal first" : "slideIn";
        let icon = this.state.open? "fa fa-arrow-left fa-xs" : "fa fa-arrow-right fa-xs";

        return (
            <div className="slider">
                <div className={slider}>
                </div>
                <div className="snap">
                    <input type="checkbox" checked={this.state.open} onChange={this.openClose.bind(this)}/>
                    <span><i className={icon}></i></span>
                </div>
            </div>
        );
    }
}

export default AcceptanceCriteria;
