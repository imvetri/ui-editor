function pushHistory(components){
    window.editorHistory = readData("ui-editor-history");
    editorHistory.push(components);
    localStorage.setItem("ui-editor-history",JSON.stringify(editorHistory) );
}

function popHistory(){
    
    window.editorHistory = localStorage.getItem("ui-editor-history");
    if(!editorHistory){
        return;
    }
    editorHistory.pop();
    localStorage.setItem("ui-editor-history",JSON.stringify(editorHistory) );
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
    if(key==="ui-editor-history"){
        let data = JSON.parse(localStorage.getItem("ui-editor-history"));

        if(data.length){
            return data;
        }

        return [];
    }

}

export function readComponent(componentName){
    let components = readData("ui-editor");
    if(!components){
        return undefined;
    }
    return components.find(component=>component.name===componentName);
}

export function writeComponent(component) {
    // If only one component is passed
    if(!Array.isArray(component) && component.name){
        let components = readData( "ui-editor");
        let index = components.findIndex(comp=>comp.name === component.name);
        components[index] = component;
        writeData("ui-editor", components);
    }
}