import {exportSeparateFile} from "./ExportSeparate";
import { logCode } from "./logCode";

export function onExport(EXPORT_TYPE, componentName){
    switch (EXPORT_TYPE) {
        case "SIMPLE": 
            logCode(componentName);
            break;

        case "STORYBOOK":
            exportSeparateFile(componentName);
            break;

        default:
            logCode(componentName);
    }
}