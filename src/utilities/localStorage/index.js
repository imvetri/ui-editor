import {getStartTags} from "../get-start-tags";

function pushHistory(components){
    window.editorHistory = readData("ui-editor-history");
    editorHistory.push(components);
    localStorage.setItem("ui-editor-history",JSON.stringify(editorHistory) );
}

export function popHistory(){
    
    let editorHistory = readData("ui-editor-history");
    if(!editorHistory){
        return;
    }

    let lastItem = editorHistory.pop();
    
    writeData("ui-editor-history", editorHistory, true);

    writeData("ui-editor", lastItem, true);
}

export function writeData(key, components, noPush){
    
    localStorage.setItem(key, JSON.stringify(components));
    if(!noPush){
        pushHistory(components);
    }
}

// If empty, return empty array.

export function readData(key){

    let components = JSON.parse(localStorage.getItem(key));

    if(components.length){

        // Sets property in components with markup containing uuid. 
        // This helps to find paremt , child, sibblings for dran and drop
        components.forEach(component=>{
            // 1.Get all start tags.
            let startTags = getStartTags(component.markup);
            
            // 2.Save it as new property.
            component.idMarkup = component.markup;

            // 3.get id tags
            let idTags = startTags.map((tag, index)=>{
                return tag.replace(">",` data-uuid="${index}">`)
            })

            // 4.replace the starttag with idTag
            startTags.forEach((startTag, index)=>{
                component.idMarkup = component.idMarkup.replace(startTag, idTags[index])
            })
        })
        return components;
    }

    return [];

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