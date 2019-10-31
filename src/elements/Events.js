import { prepareElement} from "../utilities/codeGenerator/prepareElement";
import { getNestedComponents } from "../utilities/nestedComponentSetup";
import { getComponentString } from "../utilities/convert-to-react-component";



export function publishDetails() {
        
    // Warning: Object.assign doesnt dupe the original object. It overrides only the values.
    // May cause problem with reference types.
    let element = JSON.parse(JSON.stringify(this.state.elements[this.state.selectedIndex]));

    this.props.onPreview(prepareElement(element, element.name));
}

export function onExport() {
    let nestedComponents = getNestedComponents(this.state.elements[this.state.selectedIndex]);

    console.log(nestedComponents.map(getComponentString).join(""));
}