
    export function dropHandler(ev) {
        ev.preventDefault();
        let componentName = ev.dataTransfer.getData("component-name");
        let folderName = ev.dataTransfer.getData("folder-name");
        let contents = Array.from(this.state.contents);

        // Check if the dropped item is a component
        if(componentName){
            contents.push(componentName)
        }
        // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
        else if(folderName && folderName!==this.state.folderName){
            contents.push({
                name: folderName,
                contents:[],
                type:"folder",
                status:"closed"
            })
        }
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"folder",
            status:"open"
        })

        console.log("Drop from folder");
    }

    export function dragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
            folderClass: "newFolder dragOver",
            status: "open"
        })
        console.log("Drag");
    }

    export function dragLeaveHandler(e) {
        console.log("drag");
        this.setState({
            folderClass: "newFolder",
            status: "closed"
        })
    }


export function onDragStart(e){

    let name = event.target.getAttribute("data-folder-name")
    e.dataTransfer.setData("folder-name", name);
}
