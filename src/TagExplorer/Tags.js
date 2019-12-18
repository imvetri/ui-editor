// Libraries.

import React, { Component } from "react";
import {convertJSONtoHTMLAttributes} from "../utilities/convertJSONtoHTMLAttributes";
class Tags extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        var node = this.props.node;
        var props = Object.assign({}, node.props); 
        
        delete props.children

        props = convertJSONtoHTMLAttributes(props);

        if(!node){
            return (<span>null</span>)
        }

        // Check if it contains children.
        if(node.props && Array.isArray(node.props.children)){
            var children = node.props.children.map((child,index)=><Tags key={index} node={child}/>);
            return (
                <li>
                    {`<${node.type} ${props}>`}
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
                    {`<${node.type} ${props}>`}
                        <Tags key={index} node={child}/>
                    {`</${node.type}>`}
                </li>
            );
        }        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "string"){
            let child = node.props.children;
            return (
                <li>
                    {`<${node.type} ${props}>${child}</${node.type}>`}
                </li>
            );
        }
        // nested component.
        else if(typeof node.type === "function"){
            return (
                <li>
                    {`<${node.type.name}/>`}
                </li>
            );
        }

        // check if node is object
        if(typeof node.type === "object"){
            return (
                <li>
                    {`<${node.type.id}>`}
                    {`</${node.type.id}>`}
                </li>
            );
        }
        return (
            <li>
                {`<${node.type} ${props}>`}
                    {node.type}
                {`</${node.type}>`}
            </li>
        );
    }

}

export default Tags;