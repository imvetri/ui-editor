// Implement stylesheet cleanup

export function createStylesheet(style) {

    var dynamicStyle = document.createElement('style');
    dynamicStyle.type = 'text/css';
    dynamicStyle.innerHTML = style;
    document.body.appendChild(dynamicStyle)
}