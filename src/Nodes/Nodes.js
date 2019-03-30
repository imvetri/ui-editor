// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nodes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var node = this.props.node;
        if(node && node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map(child=><Nodes node={child}/>);
            return (
                <ul>
                    <input type="radio" name="tag" value={node.type}/>{node.type}
                    {children}
                </ul>
            );
        }
        return (
            <ul>
                --
            </ul>
        );
    }

}

export default Nodes;