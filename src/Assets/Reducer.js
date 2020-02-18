import indexedDB from "../Utilities/Libraries/indexedDB/indexeDB"
export function dropHandler(ev) {
    ev.preventDefault();

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

    this.setState({
        class: "drag_over"
    })

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

export function dragLeaveHandler(e) {
    this.setState({
        class: "drop_zone"
    })
}