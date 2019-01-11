"use strict";                                 

// Public.

/**
 * Takes array of attributes found from a jsx and 
 * @param {Array} attributes 
 */
const convertToJson = ( attributes ) => {
    let object = {};
    attributes.forEach(attribute=>{
        object[attribute] = ""
    })
    return object;
}

module.exports = {
    convertToJson
}