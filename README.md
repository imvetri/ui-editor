# What is UI-EDITOR?

UI-editor is user interfaces builder for web.

Project aims to keep be as simple as possible. It is created and actively maintained by Vetrivel. 


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

 * How to create a component with markup.
 * How to pass a state.
 * How to bind events.
 * How to write event with callbacks.
 * How to write event that modify state.
 * How to read data from an event.
 * How to update state after an event.
 * How to export the component and use it in your react projects.

## How it works

 * Preview feature - An inbrowser JSX transpilation takes care of dynamically creating react components. Refer to [DynamicComponent.js](https://github.com/imvetri/ui-editor/blob/master/src/DynamicComponent/DynamicComponent.js)
 * Export feature - Markup, events with reducers, style, state are stringified. Refer to [convert-to-react-component.js](https://github.com/imvetri/ui-editor/blob/master/src/common/js/convert-to-react-component.js)
 * Events with tags listed - [jsxTranspiler.js](https://github.com/imvetri/ui-editor/blob/master/src/common/js/jsxTranspiler/index.js) returns parsed content which is rendered using [Nodes.js](https://github.com/imvetri/ui-editor/blob/master/src/Nodes/Nodes.js) component in [Events.js](https://github.com/imvetri/ui-editor/blob/master/src/Events/Events.js)

## Built With

* nodejs
* babel
* babel/standalone
* webpack
* JSX
* Reactjs
* lot of npm packages


## Contributing

Contributions like feature requests, feeback for improvements, ideas are welcome! Feel free to open an issue. Most importantly if you would like to know how it works more than what's in [How it works](#How it works), do let us know. We will help you out. Questions will be given importance than below, so please do not hesitate.

 * Feedback for improvement - Share reference websites/wireframes/mock.
 * Feature requests - Share the problem statement. Thats is good enough. If you have simple solultion as well, please share that too!.
 * CSS - I am looking for ideas for css editing.
 * DOM events - Project is tested below events. Any valid react events is expected to work.
   * onMouseLeave
   * onClick
 * Browser events - Events such as setTimeout/ other window events are not yet solved. If you have ideas, share a mock please!.
 * Reuse existing component - How to build subcomponents?. Ideas are welcome with screenshots/mocks.
   

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Front end community members.
