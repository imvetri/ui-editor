function pushHistory(components){

    let editorHistory = readData("ui-editor-history");
    editorHistory.push({
        time: (new Date()).toString(),
        data: components,
        name: ""
    });
    localStorage.setItem("ui-editor-history",JSON.stringify(editorHistory) );
}

// If empty, return empty array.

export function readData(key){

    if(key ==="ui-editor"){
        if(!window.components ){
            window.components = JSON.parse(localStorage.getItem(key)) || window.sampleComponents;
        }
        return JSON.parse(JSON.stringify(window.components));
    }
    if(key==="ui-editor-history"){
        let history = localStorage.getItem(key);
        
        if(history)
            return JSON.parse(history);
    }
    if(key ==="folders"){
        let folders = JSON.parse(localStorage.getItem(key));

        if(folders === null){
            return window.sampleFolders;
        }
        return folders;
    }

    return [];

}

export function writeData(key, components, noPush){

    if(key=="folders"){
        localStorage.setItem(key, JSON.stringify(components));
    }
    if(key=="ui-editor"){
        console.log("WRITE")
        window.components = components;
        localStorage.setItem(key, JSON.stringify(components));
        if(!noPush){
            pushHistory(components);
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

export function writeComponent(parent) {

    if(!Array.isArray(parent) && parent.name){
        let components = readData( "ui-editor");
        let index = components.findIndex(comp=>comp.name === parent.name);
        components[index] = parent;
        writeData("ui-editor", components);
    }
}
