export function prepareMarkup (element, name){
    // Find ID from events, 
    // Replace with variable.

    /**
     * Problem statement: 
     *  How to bind event to html.
     * 
     * Example: 
     * How to convert below markup
     *  <input type="text" />
     * 
     * and below events object
     * 
     *  {
     *      onClick : function(){},
     *      onSubmit : function(){}
     *  }
     * 
     * to
     * 
     * <input type="text" onClick=function(){} onSubmit=function(){} />
     */

    let markup = element.markup, events = element.events;

        events.forEach(event=>{
            let id = event.id.split("-")[1];
            if(!markup.includes(`{ ...${name}_event_${id}}`)){
                markup = markup.replace(`${id}"`,`${id}" { ...${name}_event_${id}}`);
            }
        });
    return markup;
}