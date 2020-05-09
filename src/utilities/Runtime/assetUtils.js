
export function nameToURL(style) {
    if (typeof style !== "string") {
        console.error("state should be a string")
    }

    if(window.assets.length>0){
        // Check if style has $assets
        while (style.includes("$assets")) {
            // Replace it with asset blob url
            let assetName = style.split("['")[1].split(`]`)[0].split("");
            assetName.pop();
            assetName = assetName.join("");
            let asset = window.assets.find(asset => asset.name === assetName)

            style = style.replace(`$assets['${assetName}']`, `url(${getURL(asset.blob, assetName)})`)
        }
    }

    return style;
}


export function urlToName(state) {

    // Check if style has $assets
    while (state.includes(window.location.host)) {
        // Replace it with asset blob url
        let url = state.split("url(")[1].split(`)`)[0]

        let asset = window.assets.find(asset => asset.url === url)

        if (asset) {

            state = state.replace(`url(${asset.url})`, `$assets['${asset.name}']`)

        }
    }

    return state;
}


export function hasAssets(state) {
    return state.includes("$assets");
}