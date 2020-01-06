
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

function findTag(markup, uuid){
    let suspectIndex = markup.indexOf(`data-uuid="${uuid}`);
    let tag = markup.substring(0,suspectIndex-1).split("").reverse().join("").split("<")[0].split("").reverse().join("")
    return tag;
}

/**
 * Returns the substring from markup containing the tag.
 * @param {*} markup 
 * @param {*} uuid - 'data-uuid="2"'
 * @param {*} tag - HiComponent
 */
function getComponentMarkup(markup, uuid, tag){
    var suspect = parseLeft(markup, uuid, tag);
    return parseRight(suspect, tag)
}

/**
 * Returns string after removing a sub component of mathcing tag name
 * @param {*} markup 
 * @param {*} uuid 
 * @param {*} tag 
 */
export function deleteSubComponent(markup, uuid, tag){
    let componentMarkup = getComponentMarkup(markup, `data-uuid="${uuid}"`, tag);
    return markup.split(componentMarkup).join("")
}

/**
 * Find the tag containing uuid. and moves it up one sibbling.
 * @param {String} markup -
 * @param {String/ number} uuid - 
 * @param {Strong} tag  - component name
 */
export function moveSubComponentUp(markup, uuid, tag) {
    let componentMarkup = getComponentMarkup(markup, `data-uuid="${uuid}"`, tag);
    let previousTag = getComponentMarkup(markup, uuid-1, findTag(markup , uuid-1))
    return markup.replace(componentMarkup, previousTag ).replace(previousTag, componentMarkup  );
}

/**
 * Find the tag containing uuid and move it down one sibbling.
 * @param {String} markup 
 * @param {String / Numnber } uuid 
 * @param { String } tag 
 */
export function moveSubComponentDown(markup, uuid, tag) {
    let componentMarkup = getComponentMarkup(markup, `data-uuid="${uuid}"`, tag);
    let nextTag = getComponentMarkup(markup, uuid+1, findTag(markup , uuid+1))
    return markup.replace(nextTag, componentMarkup ).replace(componentMarkup, nextTag  );
}