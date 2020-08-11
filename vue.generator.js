function replaceAll(str, replace, it){
    while(str.indexOf(replace)!==-1){
        str = str.replace(replace, it)
    }
    return str
}

function vueTemplateSyntax(component) {

    let markup = component.markup;
    // 1. replace all { and } with {{ and }}
    markup = replaceAll(markup, "{", "{{")
    markup = replaceAll(markup, "}", "}}")
    return markup;
}

function generate(component) {
    let markup = vueTemplateSyntax(component)
    return 
`
Vue.component(${component.name}, {
    data: function(){
        return ${component.state}
    },
    template: '<div>${markup}</div>'
})
`
}