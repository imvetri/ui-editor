const babel = require("@babel/standalone");
import React from "react";

// IMPORTANT - Do not rename style,state,events. 
// EXAMPLE - val replaces them at line#4 in inputComponent1.
export function transpileJSX(jsx, style, state, events) {
    var dynamicStyle = document.createElement('style');
    dynamicStyle.type = 'text/css';
    dynamicStyle.innerHTML = style;
    document.body.appendChild(dynamicStyle)
    let result;
    try{
        // Babel will create new local variable, so try running assuming React will be available.
        result = eval(babel.transform(jsx, { presets: ['react'] }).code)
    } catch(e){
        try{
            // Try running assuming _react will be available as alias for React.
            result = eval(babel.transform(jsx, { presets: ['react'] }).code.replace(/React/g,"_react"));
        } catch(e){
            // Try running assuming _react2.default will be available as alias for React.

            if(result=== undefined)
            {
                debugger;
                console.log(e);
            }
            result = eval(babel.transform(jsx, { presets: ['react'] }).code.replace(/React/g,"_react2.default"));

        }
    }
    finally{
        return result;
    }
}