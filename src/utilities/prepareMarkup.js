export function prepareMarkup (markup, events){
    // Find ID from events, 
    // Replace with variable.

    events.forEach(event=>{
        let id = "ID"+event.id.split("ID")[1]
        
        if(markup.indexOf(id)==-1){
            console.error(id, " - id is not present in the markup.");
        }
        markup = markup.replace(id+'"', id+'"'+" {...event"+id+"}");
    });

    return markup;
}