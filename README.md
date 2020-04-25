## UI editor

UI editor is based on state driven components.

### State driven components.

A single object should determine the structure of the components. In state driven components, data from the state is used in rendering component tree. 

#### Philosophies.


1. Always store a child component as a property in the state. Keep the component value as an array and store the props data.

Example

ParentComponent.state = {
  ChildComponent: [{name:"Vetrivel"}]
}

2. To hide a component, do not use state, instead make the ChildComponent list as empty.

Example

ParentComponent.state = {
  ChildComponent: []
}

3. Use the same property to render lists. 

Example

ParentComponent.state = {
  ChildComponent: [{name:"Vetri"}, {name: "vel"}] 
}

4. A parent component has layout, behaviour and contents. A content is a child component or a valid html element. A layout takes care of how the children or the content should be rendered such as grid or list.  The behaviour / functionality is what a component should do such as form submission, work as an accordion etc.


## Demo - https://imvetri.github.io/ui-editor/

## Benefits and features
1. Save effort on code refactor from one framework to another.
2. Helps to kick start the comonent development process.
3. Finish component development independently and integrate later.
4. Generates code in ReactJS. Watch [Demo](https://github.com/imvetri/ui-editor/wiki/Code-generation-to-ReactJS)
5. Easily maintain development history in your SCM tool.


## Step-by-step Tutorials - 
1. [Getting started](https://github.com/imvetri/ui-editor/wiki/Getting-Started)
2. [Create simple component](https://github.com/imvetri/ui-editor/wiki/Create-a-simple-component)
3. [Create simple component with content from state](https://github.com/imvetri/ui-editor/wiki/Create-simple-component-with-content-from-state)
4. [Create component with dynamic content](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-content)
5. [Create component with dynamic style](https://github.com/imvetri/ui-editor/wiki/Create-component-with-dynamic-style)
6. [Compose bigger components using smaller components](https://github.com/imvetri/ui-editor/wiki/Compose-bigger-components-using-smaller-components)
7. [Component composition - Subscribe to child event](https://github.com/imvetri/ui-editor/wiki/Component-composition---Subscribe-to-child-components)
8. [Code Generation](https://github.com/imvetri/ui-editor/wiki/Code-generation-to-ReactJS)

## Video Tutorials - 
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

## Request Feature / Feebacks / Bugs

 * Please feel free to open an issue



## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details
