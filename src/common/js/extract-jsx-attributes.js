"use strict";

// Private.

const jsxAttributes = new RegExp(/{([^}]+)}/, "g");
                                 

// Public.

/**
 * Fetches all the attributes from a markup/jsx based on the pattern {}.
 * @param {String} jsx - markup which user added.
 * @example- Look at the unit test.
 * @returns {Array} - List of attributes.
 */
const extractJsxAttributes = ( jsx ) => {
    // Extract all the attributes using regex.
    let attributes = jsx.match(jsxAttributes)

    // Remove the braces and return the list.
    return attributes && attributes.map(attribute => attribute.replace("{", "").replace("}", "") ) || [];

}

module.exports = {
    extractJsxAttributes
}