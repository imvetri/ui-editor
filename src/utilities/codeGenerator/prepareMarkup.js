export function prepareMarkup (markup, events){
    // Find ID from events, 
    // Replace with variable.

    events.forEach(event=>{
        let id = event.id.split("-")[1];
        markup = markup.replace(id+'"', id+'"'+" {...event"+id+"}");
    });

    return markup;
}