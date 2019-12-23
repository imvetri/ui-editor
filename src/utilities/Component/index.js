import { writeComponent } from "../localStorage";
import { deleteSubComponent } from "../../FocusBarComponent/getComponentMarkup";

export function createComponent(parent, tag, uuid){
    parent.idMarkup = parent.idMarkup.replace(`"${uuid}">`,`"${uuid}"><${tag}></${tag}>`)
    writeComponent(parent, true);
}

export function deleteComponent(parent,tag, uuid){
    var targetUuid = `data-uuid="${uuid}"`;

    parent.idMarkup = deleteSubComponent(parent.idMarkup, targetUuid, tag);

    writeComponent(parent, true)
}

export function moveComponent(){

}