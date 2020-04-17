// Given folders and a foldername, finds a folder and returns it.
export function findFolder(folderName , folder ){

    // Return early if type is string.
    if(typeof folder === "string"){
        return false
    }

    if(typeof folder === "object"){

        // Return folder if name matches.
        if(folder.name===folderName){
            return folder;
        }

        // Recursively find in sub folder.
        return folder.contents.find(function(content){
            return findFolder(folderName, content)
        }.bind(this))
    }
}