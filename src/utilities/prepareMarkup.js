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

    /**
     * Problem statement: How to add child config to parent?
     * Solution: Modifiy the markup.
     * 
     * config.showCondition
     */

    `<div>
    <button id="show" { ...sdf_event_show}>Show</button>
    <button id="hide" { ...sdf_event_hide}>Hide</button>
    {this.state.valid ? header : null}
    </div>`

    if(element.children){
        let children = Object.keys(element.children);

        children.forEach(child=>{
            if(!markup.includes(child)){
                console.error("Markup does not have the child element but has in the config. correct it");
            }
            /** Transform
             * {header} = > {this.state.valid ? header : null}
             * */
            if(element.children[child].config.showCondition){
                markup = markup.replace(`${child}`, `this.${element.children[child].config.showCondition}?${child}:null`)
            }
        });
    }


    return markup;
}