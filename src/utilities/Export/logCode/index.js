import { getNestedComponents } from "../../Runtime";
import { convertToReact } from "../../CodeGenerator/React";
import { readData } from "../../Storage";

export function logCode(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    let nestedComponents = getNestedComponents(selectedComponent);

    let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
    const removeParanthesis = (component)=>{
        return component.replace("(","").replace("})","}")
    }

    let result = uniqueComponents.map(convertToReact).map(removeParanthesis).reverse().join("");
    console.log(result);
}