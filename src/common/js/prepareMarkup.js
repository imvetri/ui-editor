export function prepareMarkup (markup){
    if(!markup.includes("{...events}")){
        // For markups without closing.
        if(markup.includes("/>")){
            markup = markup.replace("/>"," {...events}/>")
        }
        // For elements with closing tags.
        else if(markup.indexOf(">")<markup.indexOf("</")){
            markup = markup.replace(">", " {...events}>")
        }
    }
    return markup;
}