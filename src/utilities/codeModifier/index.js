export function codeModifier(reducer) {
    return `
var state = JSON.parse(JSON.stringify(this.state))
${reducer}
this.setState(state);
console.log(state);
`
}