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

// puts uuid to start tags of the component.
function IdMarkup (component) {
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
}

function count(string, word) {
    return string.split(word).length - 1;
 }

function noIdMarkup (idMarkup) {
    //1. Get all start tags.
    let startTags = getStartTags(idMarkup);

    //2. get id tags.
    let idTagsCount = count(idMarkup,"data-uuid");

    //3. remove uuids
    for(var i=0;i<idTagsCount;i++){
        idMarkup = idMarkup.replace(` data-uuid="${i}"`, "")
    }

    return idMarkup;
}

// If empty, return empty array.

export function readData(key){
    /**
     * 1. check in window.
     * 2. if empty, create and add to it.
     * 3. return
     */
    console.log("READ")
    if(!window.components){
        window.components = JSON.parse(localStorage.getItem(key));
    }

    if(window.components.length ){

        if(key==="ui-editor"){
            // Sets property in components with markup containing uuid. 
            // This helps to find paremt , child, sibblings for dran and drop
            window.components.forEach(IdMarkup)
        }

        return JSON.parse(JSON.stringify(window.components));
    }

    return [];

}

export function writeData(key, components, noPush){
    console.log("WRITE")
    window.components = components;
    localStorage.setItem(key, JSON.stringify(components));
    if(!noPush){
        pushHistory(components);
    }
}

export function readComponent(componentName){
    let components = readData("ui-editor");
    if(!components){
        return undefined;
    }
    return components.find(component=>component.name===componentName);
}

export function writeComponent(parent, idMarkupModified) {
    // If only one component is passed
    if(!Array.isArray(parent) && parent.name){
        let components = readData( "ui-editor");
        let index = components.findIndex(comp=>comp.name === parent.name);
        if(idMarkupModified){
            debugger;
            parent.markup = noIdMarkup(parent.idMarkup);
        }
        components[index] = parent;
        writeData("ui-editor", components);
    }
}