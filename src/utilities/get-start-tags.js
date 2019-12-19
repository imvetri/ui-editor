export function getStartTags(markup){
    return markup.split(">").filter(item=>!item.includes("/")).filter(Boolean).map(item=>item+">")
}