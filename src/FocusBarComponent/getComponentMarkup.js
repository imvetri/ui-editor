
function parseLeft(markup, uuid, tag){
    
    let uuidIndex = markup.indexOf(uuid);
    
    let suspect = markup.substr(uuidIndex);
    // find tag index from left of uuidIndex
    while(suspect.indexOf(`<${tag}`)!==0){
        uuidIndex--
        suspect = markup.substr(uuidIndex);
    }
    return suspect;
}

function parseRight(suspect, tag){
    // 1. return substring index of </${tag}>
    // 2. what if nested?
    let closeTag = `</${tag}>`
    let closeTagIndex = suspect.indexOf(closeTag) + closeTag.length
    return suspect.substr(0,closeTagIndex)
}

/**
 * Returns the substring from markup containing the tag.
 * @param {*} markup 
 * @param {*} uuid - 'data-uuid="2"'
 * @param {*} tag - HiComponent
 */
function getComponentMarkup(markup, uuid, tag){
    var suspect = parseLeft(markup,'data-uuid="1"', tag);
    return parseRight(suspect, tag)
}

/**
 * Returns string after removing a sub component of mathcing tag name
 * @param {*} markup 
 * @param {*} uuid 
 * @param {*} tag 
 */
export function deleteSubComponent(markup, uuid, tag){
    let componentMarkup = getComponentMarkup(markup, uuid, tag);
    return markup.split(componentMarkup).join("")
}