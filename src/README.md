## About this folder

Contains the panels and utilities that are visible when the tool is run. The panels are the visible contents of the tool. The utilities are supporting components, libraries, code generators, run time code etc.

## Components

Editor panel provides UI for creating new component details and editing an existing component. It has fields to enter component name, component markup, component state in the form of valid json, and component css.

## User manual.

### Component name
Component name should be unique and start with captials.

### Component markup
Component markup follows typical JSX syntax. Refer to state values using the syntax ```{state.property}```. Make sure the property exist in the component state.
You can refer other components using a open and close jsx tags. 

For example, if there is a child component you would like to refer here, type ```<ChildComponent></ChildComponent>```

Do not pass props to child component from here. Use ```Events -> Select Child component -> Click Override``` for that. Setting this option, will clone the ```ChildComponent``` state and adds as property in current component as ```ChildComponent : [CLONED_STATE]```.  NOTE :- This property will be cloned as an Array.

To hide a child component, Make the list empty.

To render a list of child components, Push data to the array from parent state.

There is no error handling yet. So validate your JSX before saving.


### Component state.
Create a valid JSON in this field. you can access this property in the markup using the syntax ```{state.property}```

The same property can be referenced in the reducers as ```state.property```. There is no need to add ```this.state``` 

### Component CSS.
All css work. To refer to images in css, use ```$assets[ASSET_NAME]```.
To use dynamic classes for your markup, have a property in state that controls which class gets applied to an element. Example:- create a reducer for an event that can convert ```state.classNames=="active";``` to ```state.classNames=="inactive";```. Refer the property in makrup as ```<h1 className={state.classNames}>Hi</h1>

## Technical Specification

Editor takes following props.

1. element - It is the currently selected component from the editors panel.
2. onSave - It calls this props on click of ```save``` button