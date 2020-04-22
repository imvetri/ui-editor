import { convertToReactStories } from "../../CodeGenerator/ReactStories";
import { convertToReact } from "../../CodeGenerator/React";

import { getNestedComponents, getChildren } from "../../Runtime";
import { readData } from "../../Storage";
import { zipFiles } from "../../Libraries/zipFiles";

function getUniqueComponents(nestedComponents){
    return [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
}

const removeParanthesis = (component)=>{
    return component.replace("(","").replace("})","}")
}

let headerImports = ` /* eslint-disable */
import React, {Component} from 'react';
`;

function updateVariants(components){


     /**
      * if component.variants is empty
      * take its state 
      * push it to variant with name as "initial"
      */


    components.forEach(component=>{
        if(component.variants.length===0){
            component.variants.push({
                name: "initial",
                state: JSON.parse(component.state)
            })
        }

    })
    return components
}

export function exportSeparateFile(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    
    let nestedComponents = getNestedComponents(selectedComponent);
    let uniqueComponents = getUniqueComponents(nestedComponents)
    uniqueComponents = updateVariants(uniqueComponents)
    /**
     * For each unique components
     * convert it to import react + import children dependencies + export.
     * 
     * For each unique components
     * convert the stories.
     */





    let individualComponents = uniqueComponents.map(function(component){
        let children = getChildren(component);
        let childrenImports = children.map(child=>`import ${child} from "./${child}";`).join("\n");
        
        return {
            name:component.name+".js",
            content:`${headerImports}\n${childrenImports}\n ${removeParanthesis(convertToReact(component))} \nexport default ${component.name};`
        }
    })

    let individualStories = uniqueComponents.map(function(component){
        return{
            name: component.name+".stories.js",
            content: convertToReactStories(component)
        }
    });



    zipFiles([...individualComponents,...individualStories])
};