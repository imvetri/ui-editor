import {download} from "./downloadFile";

export function zipFiles (array){
    var zip = new JSZip();

    // Generate a directory within the Zip file structure
    var src = zip.folder("src");

    array.forEach(item=>{
        src.file(item.name, item.content)
    });
    
    // Generate the zip file asynchronously
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        // Force down of the Zip file
        download(content, "archive.zip");
    });
}