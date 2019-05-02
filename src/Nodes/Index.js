// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Nodes extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var node = this.props.node;
        // Check if it contains children.
        if(node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map((child,index)=><Nodes key={index} node={child} onSelectedElementChanged={this.props.onSelectedElementChanged}/>);
            return (
                <ul>
                    <label>
                        <input 
                            type="radio" 
                            name="selectedElement" 
                            onChange={this.props.onSelectedElementChanged} 
                            value={node.type+ node.props.id}/>
                        {node.type + node.props.id}
                    </label>
                    {children}
                </ul>
            );
        }
        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "object"){
            let child = node.props.children;
            return (
                <ul>
                    <label>
                        <input 
                            type="radio" 
                            name="selectedElement" 
                            onChange={this.props.onSelectedElementChanged} 
                            value={node.type+ node.props.id}/>
                        {node.type + node.props.id}
                    </label>
                    <Nodes key={index} node={child} onSelectedElementChanged={this.props.onSelectedElementChanged}/>
                </ul>
            );
        }
        return (
            <ul>
                <label>
                    <input 
                        type="radio" 
                        name="selectedElement" 
                        value={node.type+ node.props.id}
                        onChange={this.props.onSelectedElementChanged} 
                        />
                    {node.type + node.props.id}
                </label>
            </ul>
        );
    }

}

export default Nodes;