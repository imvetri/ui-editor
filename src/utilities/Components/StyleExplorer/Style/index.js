
function convertToString(property){
    return `"${property.split(":")[0].trim()}":"${property.split(":")[1].trim()}"`
}

function convertToObject(rule){

    var selector = rule.split("{")[0].trim();
    var properties = '{'+rule.split("{")[1].split("}")[0].split(";").map(s=>s.trim()).filter(Boolean).map(convertToString).join(",") +'}';

    var declarations = JSON.parse(properties)

    var rule = {
        selector: selector,
        declarations: Object.keys(declarations).map(key=>{
            return {
                property: key,
                value: declarations[key]
            }
        })
    };

    return rule;
}

export function getObjectFormat(style){
    if(!style || style.length==0){
        return [];
    }
    var rules = style.split("}").filter(Boolean).map(item=>item+"}");
    return rules.map(convertToObject);
}

function ruleToString(rule){
	return `${rule.selector}    {\n${declarationToString(rule.declarations)}\n}`
}
function declarationToString(declarations){
	return declarations.map(declaration=>`    ${declaration.property}:     ${declaration.value};`).join("\n")
}

export function convertToStyleString(rules){
    return rules.map(ruleToString).join("\n");
}