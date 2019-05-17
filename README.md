# What is ui-editor?

ui-editor is user interfaces builder for web. It is actively being maintained. [Live demo](https://imvetri.github.io/ui-editor/), look into tutorials section.

![Building component with events](https://raw.githubusercontent.com/imvetri/ui-editor/master/gifs/Component_responding_to_events.gif)

## Applications

* Cross framework component code generation.
* GUI.
* Concept can be applied to any framework of your team's choice.
* Hides the framework APIs.
* Component testability for different states.
* More refining will allow us to cleanup front end development.

## Getting Started

```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```


## Running the tests

```
npm start
npx cypress open
```


## Demos


To see it in action, do below

```
npx cypress open
```

run the first test


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


## Contributing

Contributions like feature requests, feeback for improvements, ideas are welcome! Feel free to open an issue.

 * Feedback for improvement, Feature requests, Styling. Any ideas you have, share your expectations as a mock via screenshot.
 
## Planned

 * Nested component building.
   
## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Open source community members, for making things easier, their efforts made sure that knowledge/information shouldn't be held as property of a company and should be free for access. 

## Purpose of this project

If you are working as an employee, its important that we stay chill minded. Solve important problems that saves time of developer not just the busines. 
* Make time for yourself at work, if any of your solution saves time for business, that is something you have earned for yourself.

## Releases

Project will maintain monthly release after some feedback. This is my first time maintaining an open source project, it would be of great help if you could drop some tips.!

