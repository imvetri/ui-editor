import { getNestedComponents } from "../utilities/nestedComponentSetup";
import { getComponentString } from "../utilities/convert-to-react-component";


export function onExport() {
    let nestedComponents = getNestedComponents(this.state.elements[this.state.selectedIndex]);

    console.log(nestedComponents.map(getComponentString).join(""));
}