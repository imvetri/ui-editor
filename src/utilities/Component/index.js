import { writeComponent } from "../localStorage";
import { deleteSubComponent , moveSubComponentUp, moveSubComponentDown} from "./getComponentMarkup";

export function createComponent(parent, tag, uuid){
    parent.idMarkup = parent.idMarkup.replace(`"${uuid}">`,`"${uuid}"><${tag}></${tag}>`)
    writeComponent(parent, true);
}

export function deleteComponent(parent,tag, uuid){

    debugger;
    parent.idMarkup = deleteSubComponent(parent.idMarkup, uuid, tag);

    writeComponent(parent, true)
}

export function moveComponentUp(parent,tag, uuid){

    debugger;
    parent.idMarkup = moveSubComponentUp(parent.idMarkup, uuid, tag);

    writeComponent(parent, true)

}


export function moveComponentDown(parent,tag, uuid){

    debugger;
    parent.idMarkup = moveSubComponentDown(parent.idMarkup, uuid, tag);

    writeComponent(parent, true)

}