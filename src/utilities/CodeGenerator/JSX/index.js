/**
 * 
 * @param {Object} item - Layout information that renders the div component.
 * @returns {string} - Returns the JSX string.
 */
function buildJSX(item){
    debugger;
    var start = `<${item.type}>`;
    var end = `</${item.type}>`;
    if(item.children===undefined){
        return start+end;
    }
    return `${start}
    ${(item.children && (item.children.map(buildJSX).join("")))}
${end}`;
}

module.exports = {
    buildJSX
}