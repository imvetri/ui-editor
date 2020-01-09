window.iDB = "";
import { MindexedDB } from "./MindexedDB";

window.onload = function (){
    debugger;
    window.iDB = new MindexedDB("testDB", {testStore: "name"});
    window.iDB.connect().then(function() {
        iDB.put("testStore", {name: "Ralf", species: "Dog"});
        iDB.put("testStore", {name: "Fred", species: "Cat", numbers: [1,2,3]});
        iDB.get("testStore", "Fred").then(function(animal){console.log(animal)});
       // iDB.close();
    })
}


export default iDB;