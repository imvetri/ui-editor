window.iDB = "";
import { MindexedDB } from "./MindexedDB";

window.onload = function (){
    window.iDB = new MindexedDB("uiEditor", {uiEditor: "name"});
    window.iDB.connect();
}


export default iDB;