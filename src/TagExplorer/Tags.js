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

        if(!node || typeof node === "string"){
            return (<span>null</span>)
        }
        
        // node
        if(typeof node.props.children === "string"){
            let child = node.props.children;
            return (
                <li>
                    {`<${node.type} ${props}>${child}</${node.type}>`}
                </li>
            );
        }
        // Children
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
        if(typeof node.props.children === "object"){
            let child = node.props.children;
            return (
                <li>
                    {`<${node.type} ${props}>`}
                        <Tags key={index} node={child}/>
                    {`</${node.type}>`}
                </li>
            );
        }
        // Chilren component / Nested component
        if(typeof node.type === "function"){
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