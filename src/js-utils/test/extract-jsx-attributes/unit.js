const {extractJsxAttributes} = require("../../extract-jsx-attributes");

console.assert(extractJsxAttributes("<input>") === null)

console.assert(extractJsxAttributes("<input name={name}/>")[0] === "name")

console.assert(extractJsxAttributes("<input name={name}/>\n<div>{text}<another {texti}/></div>")[0] === "name")
console.assert(extractJsxAttributes("<input name={name}/>\n<div>{text}<another {texti}/></div>")[1] === "text")
console.assert(extractJsxAttributes("<input name={name}/>\n<div>{text}<another {texti}/></div>")[2] === "texti")