# What is ui-editor?

ui-editor is user interfaces builder for web. It is actively being maintained.


## Getting Started

```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```

It comes with a Demo component to play around.

## Running the tests

There are no tests in this project. Project is aimed to keep it simple for easy future maintenance.


## Demos

 * Hello world
 * Popup Modal

## Tutorials

<details><summary>How to create a component with markup.</summary>
<p>
![Alt Text](https://github.com/imvetri/ui-editor/blob/master/gifs/Component_with_static_content.gif)
</p>
</details>

<details><summary>How to pass a state.</summary>
<p>
![Alt Text](https://github.com/imvetri/ui-editor/blob/master/gifs/Component_receiving_data_from_state.gif)
</p>
</details>

<details><summary>How to bind events and modify state.</summary>
<p>
![Alt Text](https://github.com/imvetri/ui-editor/blob/master/gifs/Component_responding_to_events.gif)
</p>
</details>

<details><summary>How to read data from an event.</summary>
<p>
![Alt Text](https://github.com/imvetri/ui-editor/blob/master/gifs/Component_accessing_event_object.gif)
</p>
</details>
<details><summary>How to export the component and use it in your react projects.</summary>
<p>
</p>
</details>


## How it works

 * Preview feature - An inbrowser JSX transpilation takes care of dynamically creating react components. Refer to [DynamicComponent.js](https://github.com/imvetri/ui-editor/blob/master/src/DynamicComponent/index.js)
 * Export feature - Markup, events with reducers, style, state are stringified. Refer to [convert-to-react-component.js](https://github.com/imvetri/ui-editor/blob/master/src/utilities/convert-to-react-component.js)
 * Events with tags listed - [jsxTranspiler.js](https://github.com/imvetri/ui-editor/blob/master/src/utilities/jsxTranspiler/index.js) returns parsed content which is rendered using [Nodes.js](https://github.com/imvetri/ui-editor/blob/master/src/Nodes/Index.js) component in [Events.js](https://github.com/imvetri/ui-editor/blob/master/src/Events/Events.js)

## Questions

If you have any questions, do let us know. We will help you out.

## Built With

* nodejs, babel, babel/standalone(Thanks!), webpack, JSX, Reactjs, lot of npm packages.


## Contributing

Contributions like feature requests, feeback for improvements, ideas are welcome! Feel free to open an issue.

 * Feedback for improvement, Feature requests, Styling. Any ideas you have, share your expectations as a mock via screenshot.
 
## Planned

 * DOM events - Project is tested below events. Any valid react events is expected to work.
   * onMouseLeave
   * onClick
 * Browser events - Events such as setTimeout/ other window events are not yet solved. If you have ideas, share a mock please!.
 * Tests
 * Reuse existing component - How to build subcomponents?. Ideas are welcome with screenshots/mocks.
   

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Open source community members, for making things easier, their efforts made sure that knowledge/information shouldn't be held as property of a company and should be free for access. 

## Purpose of this project

tbd

