
function convertToString(property){
    return `"${property.split(":")[0].trim()}":"${property.split(":")[1].trim()}"`
}

function convertToObject(rule){

    var selector = rule.split("{")[0].trim();
    var properties = '{'+rule.split("{")[1].split("}")[0].split(";").map(s=>s.trim()).filter(Boolean).map(convertToString).join(",") +'}';

    var obj = {};
    obj[selector] = JSON.parse(properties)
    return obj;

}

export function getObjectFormat(style){
    var rules = style.split("}").filter(Boolean).map(item=>item+"}");
    return rules.map(convertToObject);
}

