export function codeModifier(reducer, component) {
    return `
                        var state = JSON.parse(JSON.stringify(this.state))
                        ${reducer}
                        this.setState(state);
`
}