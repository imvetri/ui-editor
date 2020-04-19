import { exportStorybook } from "./ExportStorybook";
import { exportNWB } from "./ExportNWB";
import { exportSimple } from "./ExportSimple";

export function onExport(){
    switch (window.EXPORT_TYPE) {
        case "SIMPLE": 
            exportSimple();
            break;

        case "NWB":
            exportNWB();
            break;

        case "STORYBOOK":
            exportStorybook();
            break;
        
        default:
            exportSimple();
    }
}