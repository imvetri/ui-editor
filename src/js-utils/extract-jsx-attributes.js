"use strict";

// Private.

const jsxAttributes = new RegExp(/{([^}]+)}/, "g");
                                 

// Public.

const extractJsxAttributes = ( jsx ) => {
    let attributes = jsx.match(jsxAttributes)
    return attributes && attributes.map(attribute => attribute.replace("{", "").replace("}", "") );

}

module.exports = {
    extractJsxAttributes
}