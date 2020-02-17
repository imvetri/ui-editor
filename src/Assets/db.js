
export function writeToDB(result, name) {
    window.iDB.get(name).then(data => {
        var img = document.createElement("img");
        img.href = data.result;
        this.setState({
            imageURL: data.result
        })
    })
    window.iDB.put({ name: name, result: result })
}

export function fetchFromDB() {
    window.iDB.getAll().then(data => {
        // save it to window
        window.assets = {};
        data.forEach(image => {
            window.assets[image.name] = image.result
        });

        this.setState({
            assets: data
        })
    });
}
