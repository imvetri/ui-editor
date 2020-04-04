// Libraries.

import React, { Component } from "react";

import "./style.css";

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:"Events"
        }
    }

    updateSelectedTab(event){
        this.setState({
            selected:event.target.innerText
        })
    }

    render() {

        return (
            <div className="right container">
                {this.props.children.map(child=>{
                    
                    return  (<div className={child.props.title===this.state.selected? "tabs title": "tabs"} onClick={this.updateSelectedTab.bind(this)}>
                    {child.props.title}
                </div>)
                })}
                <div className="tab-content">
                    {this.props.children.filter(child=>child.props.title===this.state.selected)}
                </div>
            </div>
        );
    }

}

export default Right;