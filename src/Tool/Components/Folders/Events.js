
    export function dropHandler(ev) {
        ev.preventDefault();
        let componentName = ev.dataTransfer.getData("component-name");
        let contents = Array.from(this.state.contents);
        contents.push(componentName)
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"folder"
        })
        this.setState({
            folderClass: "newFolder",
            contents: contents
        })
        console.log("Drop");
    }

    export function dragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
            folderClass: "newFolder dragOver"
        })
        console.log("Drag");
    }

    export function dragLeaveHandler(e) {
        console.log("drag");
        this.setState({
            folderClass: "newFolder"
        })
    }