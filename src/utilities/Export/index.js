import { exportStorybook } from "./ExportStorybook";
import { exportNWB } from "./ExportNWB";
import { logCode } from "./logCode";

export function onExport(EXPORT_TYPE){
    switch (EXPORT_TYPE) {
        case "SIMPLE": 
            logCode();
            break;

        case "NWB":
            exportNWB();
            break;

        case "STORYBOOK":
            exportStorybook();
            break;
        
        default:
            logCode();
    }
}