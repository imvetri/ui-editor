let folderFound = "";
let parentFolder = "";
let folderParentFolder = "";

export function findParent(componentName, folder){

    let contents = folder.contents;

    for(let i=0;i< contents.length; i++){
        let content = contents[i];
        if(componentName===content){
            parentFolder = folder;
        }
        if(typeof content === "object"){
            findParent(componentName, content)
        }
    }

    return parentFolder;
}

export function findParentFolder(folderName, folder){
    
    let contents = folder.contents;

    for(let i=0;i< contents.length; i++){
        let content = contents[i];

        if(typeof content === "object"){
            if(content.name === folderName){
                folderParentFolder= folder;
            }
            findParentFolder(folderName, content)
        }
    }

    return folderParentFolder;
}

// Given folders and a foldername, finds a folder and returns it.
export function findFolder(folderName , folder ){

    // Return early if type is string.
    if(typeof folder === "string"){
        return false
    }

    if(typeof folder === "object"){

        // Return folder if name matches.
        if(folder.name===folderName){
            folderFound = folder;
        }

        let contents = folder.contents;

        for(let i=0;i< contents.length; i++){
            let content = contents[i];
            findFolder(folderName, content)
        }
    }

    return folderFound;
}