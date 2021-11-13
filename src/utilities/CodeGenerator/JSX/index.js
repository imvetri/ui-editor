console.log([layout].map(buildJSX)[0])
function buildJSX(item){
    var start = `<${item.type}>`;
    var end = `</${item.type}>`;
    if(item.children===undefined){
        return start+end;
    }
    return `${start}
    ${(item.children && (item.children.map(buildJSX).join("\n")))}
${end}`;
}