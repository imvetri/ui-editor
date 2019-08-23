// Libraries.

import React, { Component } from "react";

class Nodes extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var node = this.props.node;

        if(!node){
            return (<span>null</span>)
        }
        if(typeof node==="string"){
            return (
                    <span>{node}</span>
            );
        }

        // Check if it contains children.
        if(node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map((child,index)=><Nodes key={index} node={child} onSelectedTagChanged={this.props.onSelectedTagChanged}/>);
            return (
                <ul>
                    <label>
                        <input 
                            type="radio" 
                            name="selectedElement" 
                            onChange={this.props.onSelectedTagChanged} 
                            value={node.type+"-"+node.props.id}/>
                        {node.type +"-"+ node.props.id}
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
                            onChange={this.props.onSelectedTagChanged} 
                            value={node.type+"-"+ node.props.id}/>
                        {node.type +"-"+ node.props.id}
                    </label>
                    <Nodes key={index} node={child} onSelectedTagChanged={this.props.onSelectedTagChanged}/>
                </ul>
            );
        }
        return (
            <ul>
                <label>
                    <input 
                        type="radio" 
                        name="selectedElement" 
                        value={node.type+"-"+ node.props.id}
                        onChange={this.props.onSelectedTagChanged} 
                        />
                    {node.type +"-"+ node.props.id}
                </label>
            </ul>
        );
    }

}

export default Nodes;