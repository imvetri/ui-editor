import { getObjectFormat, convertToStyleString } from "../Components/StyleExplorer/Style";

function scopeSelectos(style, name) {
    let declarations = getObjectFormat(style);
    declarations.forEach(declaration => {
        declaration.selector = `.${name} ${declaration.selector}`
    })
    return convertToStyleString(declarations);
}
