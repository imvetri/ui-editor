
export function convertJSONtoHTMLAttributes(props) {
    let string = JSON.stringify(props);

    // Dont consider the empty objects.
    if(string.length>2){
        return JSON.stringify(props).split('"').map(item=> {
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
        }).filter(Boolean).join("")
    }
    return "";
}