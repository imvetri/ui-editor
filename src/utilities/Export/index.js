import { exportStorybook } from "./ExportStorybook";
import { exportNWB } from "./ExportNWB";
import { exportSimple } from "./ExportSimple";

export function onExport(componentName){
    switch (window.EXPORT_TYPE) {
        case "SIMPLE": 
            exportSimple(componentName);
            break;

        case "NWB":
            exportNWB(componentName);
            break;

        case "STORYBOOK":
            exportStorybook(componentName);
            break;
        
        default:
            exportSimple(componentName);
    }
}