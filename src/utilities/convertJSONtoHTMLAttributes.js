
export function convertJSONtoHTMLAttributes(props) {
    let string = JSON.stringify(props);
    Object.keys(props).forEach(prop=>props[prop]=`'${props[prop]}'`);
    // Dont consider the empty objects.
    if(string.length>2){
        let list = JSON.stringify(props).split('"').map(item=> {
            if(item.includes("{") || item.includes("}")){
                return undefined;
            }
            if(item===":"){
                return "="
            }
            if(item===","){
                return " "
            }
            return item;
        }).filter(Boolean)

        return list.join("");
    }
    return "";
}