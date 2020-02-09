// Implement stylesheet cleanup

/**
 * 
 * Asset in style sheet syntax - $asset
 */

export function createStylesheet(style, name) {

    // Check if style has $assets
    while(style.includes("$assets")){
        // Replace it with asset blob url
        let asset = style.split("['")[1].split(`]`)[0].split("");
        asset.pop();
        asset =  asset.join("");
        style = style.replace(`$assets['${asset}']`, `url(${window.assets[asset]})`)
    }
    let toDelete = [...document.querySelectorAll("[data-component-name='ParentComponent']")];
    toDelete.forEach(item=>{
        item.remove()
    })
    var dynamicStyle = document.createElement('style');
    dynamicStyle.setAttribute("data-component-name", name);
    dynamicStyle.type = 'text/css';
    dynamicStyle.innerHTML = style;
    document.body.appendChild(dynamicStyle)
}