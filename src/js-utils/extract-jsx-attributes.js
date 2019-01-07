"use strict";

// Private.

const jsxAttributes = new RegExp(/{([^}]+)}/, "g");
                                 

// Public.

const extractJsxAttributes = ( jsx ) => {
    return jsx.match(jsxAttributes);
}

module.exports = {
    extractJsxAttributes
}