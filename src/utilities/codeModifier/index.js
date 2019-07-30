export function codeModifier(reducer) {
    return `
var state = this.state;
${reducer}
this.setState(state);
console.log(state);
`
}