## UI editor

Effortless technique to build components that works across frameworks.


## Demo - 
https://imvetri.github.io/ui-editor/

### Steps to play with demo
1. Open https://imvetri.github.io/ui-editor/
2. Click Components->Editor. 
3. Right click on blank area -> context menu -> "Draw". Draw a rectangle by click and dragging towards bottom-right
4. Right click on Rectangle -> click "Text". Click on rectangle to add a text and move around.
5. Right click anywhere and click "Select". Click on rectangle / text you just created. It should have orange outline.
6. Right click anywhere and click "Edit".
7. Change some properties to see real time changes.

### What did we do?
We interacted with a demo with in a demo. ui-editor is a tool to build components. Editor component is built using ui-editor. 

### How to see the source code of Editor component?
1. Select Components->Editor.
2. Press 'Alt+E' or click at bottom button called 'Editor' to see source of the component that contains JSX, Style, and state of the component.
3. Press 'Alt+R'. A sidebar from right will contain the events and reducers of the component. Events are bound to tags that run a reducers. This section is used to publish custom events and subscribe to child events. Events help to provide two way communication between components that share same ancestors.


## Workflow and internals

Look at [Components internal parts and pieces](https://vimeo.com/386239513)

Or

![](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/ui-editor-workflow-and-internals.3.png)


## Step-by-step Tutorials - [Older version]
1. [Getting started](https://github.com/imvetri/ui-editor/wiki/Getting-Started)
2. [Create simple component](https://github.com/imvetri/ui-editor/wiki/Create-a-simple-component)
3. [Create simple component with content from state](https://github.com/imvetri/ui-editor/wiki/Create-simple-component-with-content-from-state)
4. [Create component with dynamic content](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-content)
5. [Create component with dynamic style](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-style)
6. [Compose bigger components using smaller components](https://github.com/imvetri/ui-editor/wiki/Compose-bigger-components-using-smaller-components)
7. [Component composition - Subscribe to child event](https://github.com/imvetri/ui-editor/wiki/Component-composition---Subscribe-to-child-components)
8. [Code Generation](https://github.com/imvetri/ui-editor/wiki/Code-generation-to-ReactJS)

## Video Tutorials - [Older version]
1. [Getting Started](https://vimeo.com/386239335)
2. [Create simple component](https://vimeo.com/386239365)
3. [Create simple component with content from state](https://vimeo.com/386239387)
4. [Create component with dynamic content](https://vimeo.com/386239417)
5. [Create component with dynamic style](https://vimeo.com/386239443)
6. [Compose bigger components using smaller components](https://vimeo.com/386239481)
7. [How to subscribe to child component's event from parent](https://vimeo.com/386239513)
8. [Show off - Code generation](https://vimeo.com/386239546)

## Getting Started
Install nodeJS and npm then run below code.

```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```

## Roadmap

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details
