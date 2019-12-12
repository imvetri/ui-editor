export function codeModifier(reducer, component) {
    return `
                        var state = JSON.parse(JSON.stringify(this.state))
                        ${reducer}
                        this.setState(state);
                        window.saveVariants(${window.selectedcomponentname},${component.name},state, e)
`
}