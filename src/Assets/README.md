## Assets

Assets provide UI for managing the resource files such as images, fonts etc. List of supported assets for the tool are images (jpeg, png, webp). 

### User manual

1. To add a new asset to tool, drag the file from your file explorer and drop it on Assets drop region.
2. To refer to asset from css, use ```$assets['${ASSET_NAME}']```. where ASSET_NAME is the file name.
3. Before previewing a component with assets, make sure assets are loaded in the panel by clicking ```Assets -> Load assets```

## Tech specifications

1. Data persists in the browser indexedDB.