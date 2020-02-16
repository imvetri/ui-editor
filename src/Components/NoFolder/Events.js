
    export function nodropHandler(ev) {
        ev.preventDefault();
        let componentName = ev.dataTransfer.getData("component-name");
        let contents = Array.from(this.state.contents);
        let index = contents.findIndex(content=>content===componentName);

        // Delete the item from thecontents.
        contents.slice(index, 1);

        debugger;
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"noFolder"
        })
        console.log("ON DROP noFolder");
    }

    export function nodragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
             folderClass: "newFolder dragOver"
        })
        console.log("ON DRAG OVER noFolder");
    }
