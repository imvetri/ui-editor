import indexedDB from "../Utilities/Libraries/indexedDB/indexeDB"

// Public functions.

export function dropHandler(ev) {
    ev.preventDefault();

    /* Store the image in DB and in DOM after drop */

    [].forEach.call(ev.dataTransfer.files, (file)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =  function (event,b) {
            // 1. append to body
            // 2. write to db.
            this.appendToBody(file);
            this.writeToDB(event.target.result, file.name);

        }.bind(this);
    })

    this.setState({
        class: "drop_zone"
    })
}

export function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    /* Show drag over visuals */

    this.setState({
        class: "drag_over"
    })

    ev.preventDefault();
}

export function dragLeaveHandler(e) {

    /* Show drop visuals */

    this.setState({
        class: "drop_zone"
    })
}