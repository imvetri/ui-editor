window.iDB = "";
import { MindexedDB } from "./MindexedDB";

window.onload = function (){
    window.iDB = new MindexedDB("uiEditor", {uiEditor: "name"});
    // iDB.put("uiEditor", {data:123})
    window.iDB.connect();
}


export default iDB;