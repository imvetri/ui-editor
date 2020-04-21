import { exportStorybook } from "./ExportStorybook";
import { logCode } from "./logCode";

export function onExport(EXPORT_TYPE, componentName){
    switch (EXPORT_TYPE) {
        case "SIMPLE": 
            logCode(componentName);
            break;

        case "STORYBOOK":
            exportStorybook(componentName);
            break;
        
        default:
            logCode(componentName);
    }
}