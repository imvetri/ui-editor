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
                <ul>
                    {`<${node.type} ${props}>`}
                    {children}
                    {`</${node.type}>`}
                </ul>
            );
        }
        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "object"){
            let child = node.props.children;
            return (
                <ul>
                    {`<${node.type} ${props}>`}
                        <Tags key={index} node={child}/>
                    {`</${node.type}>`}
                </ul>
            );
        }        // if node contains only one children, jsx get transpiled to object rather than array.
        else if(typeof node.props.children === "string"){
            let child = node.props.children;
            return (
                <ul>
                    {`<${node.type} ${props}>${child}</${node.type}>`}
                </ul>
            );
        }
        // nested component.
        else if(typeof node.type === "function"){
            return (
                <ul>
                    {`<${node.type.name}>`}
                    {`</${node.type.name}>`}
                </ul>
            );
        }
        return (
            <ul>
                {`<${node.type} ${props}>`}
                    {node.type}
                {`</${node.type}>`}
            </ul>
        );
    }

}

export default Tags;