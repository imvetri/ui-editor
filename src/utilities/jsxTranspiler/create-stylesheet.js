// Implement stylesheet cleanup

export function createStylesheet(style, name) {

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