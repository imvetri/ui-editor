function pushHistory(components){
    let history = localStorage.getItem("ui-editor-history") || [];
    history.push(components);
    localStorage.setItem("ui-editor-history",JSON.stringify(history) );
}

function popHistory(){
    
    let history = localStorage.getItem("ui-editor-history");
    if(!history){
        return;
    }
    history.pop();
    localStorage.setItem("ui-editor-history",JSON.stringify(history) );
}

export function writeData(key, components){
    if(key==="ui-editor"){
        localStorage.setItem("ui-editor", JSON.stringify(components));
        pushHistory(components);
    }

}

// If empty, return empty array.

export function readData(key){
    if(key==="ui-editor"){
        let data = JSON.parse(localStorage.getItem("ui-editor"));

        if(data.length){
            return data;
        }
    }

}

export function readComponent(componentName){
    let components = readData("ui-editor");
    if(!components){
        return undefined;
    }
    return components.find(component=>component.name===componentName);
}