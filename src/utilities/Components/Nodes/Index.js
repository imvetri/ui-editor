// Libraries.

import React, { Component } from "react";

class Nodes extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var node = this.props.node;

        if(!node){
            return null;
        }
        if(typeof node==="string"){
            return (
                    <li>{node}</li>
            );
        }
        // nested component.
        if(typeof node.type === "function"){
            return (<ul>
                <label>
                    <input 
                        type="radio" 
                        name="selectedElement" 
                        value={"child-component-"+node.type.name}
                        onChange={this.props.onSelectedTagChanged} 
                        />
                    {node.type.name}
                </label>
            </ul>
            );
        }

        var id = node.props.id ? ("-"+node.props.id) : "";

        if(id==="") {
            // Check if it contains children.
            if(node.props && Array.isArray(node.props.children)) {
                return node.props.children.map((child,index)=><Nodes key={index} node={child} onSelectedTagChanged={this.props.onSelectedTagChanged}/>);
            }
            else if(typeof node.props.children === "object"){
                return <Nodes key={index} node={node.props.children} onSelectedTagChanged={this.props.onSelectedTagChanged}/>
            }
            return null;
        }
        else {
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
                                value={node.type + id}/>
                            {node.type +id}
                        </label>
                        {children}
                    </ul>
                );
            }
            // if node contains only one children, jsx get transpiled to object rather than array.
            else if(typeof node.props.children === "object"){
                let children = <Nodes key={index} node={node.props.children} onSelectedTagChanged={this.props.onSelectedTagChanged}/>
    
                return (
                    <ul>
                        <label>
                            <input 
                                type="radio" 
                                name="selectedElement" 
                                onChange={this.props.onSelectedTagChanged} 
                                value={(node.type.name || node.type)+id}/>
                            {(node.type.name || node.type)+id}
                        </label>
                        {children}
                    </ul>
                );
            }

            return (
                <ul>
                    <label>
                        <input 
                            type="radio" 
                            name="selectedElement" 
                            value={node.type+id}
                            onChange={this.props.onSelectedTagChanged} 
                            />
                        {node.type +id}
                    </label>
                </ul>
            );
        }
    }

}

export default Nodes;