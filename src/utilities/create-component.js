import {convertToReact} from "./CodeGenerator/React";

function createComponent(component){

    let componentString = convertToReact(component);

    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"]  }).code)
}

module.exports = {
    createComponent
}