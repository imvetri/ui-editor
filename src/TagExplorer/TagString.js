// Libraries.

import React, { Component } from "react";
import {convertJSONtoHTMLAttributes} from "../utilities/convertJSONtoHTMLAttributes";

/**
 * Usage.
 * 
 * <TagString node={nodeTree} treeId="0">/
 * 
 * Use this to generate html string out of JSX
 */

class TagString extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var node = this.props.node;
        var props = Object.assign({}, node.props); 
        var parentTreeId = this.props.treeId;
        
        delete props.children

        props = convertJSONtoHTMLAttributes(props);

        if(!node){
            return (<span>null</span>)
        }

        // Check if it contains children.
        if(node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map((child,index)=><Tags key={index} node={child} treeId={`"${parentTreeId}-${index}"`}/>);
            return (
                <li>
                    {`<${node.type} ${props} treeId="${parentTreeId}">`}
                    {children}
                    {`</${node.type}>`}
                </li>
            );
        }
        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "object"){
            let child = node.props.children;
            return (
                <li>
                    {`<${node.type} ${props} treeId="${parentTreeId}>`}
                        <Tags key={index} node={child} treeId={`${parentTreeId}`}/>
                    {`</${node.type}>`}
                </li>
            );
        }        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "string"){
            let child = node.props.children;
            return (
                <li>
                    {`<${node.type} ${props} treeId="${parentTreeId}">
                        ${child}
                    </${node.type}>`}
                </li>
            );
        }
        // nested component.
        else if(typeof node.type === "function"){
            return (
                <li>
                    {`<${node.type.name} treeId="${parentTreeId}"/>`}
                </li>
            );
        }

        // check if node is object
        if(typeof node.type === "object"){
            return (
                <li>
                    {`<${node.type.id} treeId="${parentTreeId}">`}
                    {`</${node.type.id}>`}
                </li>
            );
        }
        return (
            <li>
                {`<${node.type} ${props} treeId="${parentTreeId}">`}
                    {node.type}
                {`</${node.type}>`}
            </li>
        );
    }

}

export default TagString;