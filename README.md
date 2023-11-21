<div align="center">
  <a href="https://github.com/imvetri/ui-editor">
    <img width="200" height="200" src="https://github.com/imvetri/ui-editor/blob/master/docs/logo_size.jpg">
  </a>
  <br>
  <br>
  
  [![Build Status](https://travis-ci.com/imvetri/ui-editor.svg?branch=master)](https://travis-ci.com/github/imvetri/ui-editor/)

  <br/>
</div>

# Unleash Your Designing Potential with ui-editor 🔥

## About

Welcome to **ui-editor**, where I strive to make the machine work for me, not the other way around. This cutting-edge, web-based interface builder, powered by ReactJS, is your key to rapid application development. Forget wrestling with framework syntax – focus on building components using jsx, state, and events.

What began as an experimental tool for readable code generation has evolved into a powerhouse for instant rendering. Witness its capabilities in action through the [recorded video](https://vimeo.com/464104903) and the mesmerizing [drag-and-drop feature](https://vimeo.com/642968726). Not to mention, it allows you to edit styles – talk about intriguing!

And that's not all! I've integrated react-flow for an infinite canvas. Check out the mind-blowing demo [here](https://www.youtube.com/watch?v=Sfe6Qobn8vo).

### See it in action - [Demo](https://imvetri.github.io/ui-editor/)

#### Draw on left, see the code on right (working on it)
<img width="612" alt="excalidraw+ui-editor" src="https://github.com/imvetri/ui-editor/assets/6542274/4a736ffe-2e7f-4c18-aba9-9027d7ed2dd2">


### Explore More - [Wiki](https://github.com/imvetri/ui-editor/wiki)

### Crisp story - [Illustrative story](https://www.linkedin.com/pulse/introducing-web-designers-developer-vetrivel-shanmugam/)

Unleash your creativity and dive into more experiments and concepts in the video section.

<br/>
<br/>

## Philosophy

- **Artificial Intelligence Unleashed:** While AI is rooted in unsolved functions, ui-editor thrives on solved functions.
- **Defying Competitors:** Face off against low-code, no-code systems. ui-editor empowers you to build applications in any domain effortlessly.
- **Engineering Excellence:** Extend code to create an infinite space for teams to collaborate seamlessly.
- **Bloatware Slayer:** Bid farewell to modern bloatware like Jira, Slack, Confluence, and Excel.
- **JavaScript Mastery:** Crafted with love using JavaScript.
- **Everything is a Rectangle:** Simplifying complexity, one rectangle at a time.

### Discover More - [Latest Design](https://ui-editor.github.io/flow/)

Find the source for current changes at [ui-editor/flow](https://github.com/ui-editor/flow).

<br/>
<br/>

# Engineering Efficiency

![Illustration](https://raw.githubusercontent.com/imvetri/ui-editor/master/docs/gifs/Illustration.png)

# Blueprint - Architecture - Design Wireframe

![Wireframe](https://raw.githubusercontent.com/imvetri/ui-editor/6e8bf195a6826ea11b97b61e06dd23fbda6a6a39/docs/gifs/wireframe.png)

![Screens](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/Back%20To%20First%20Design.png)

![Screens](https://raw.githubusercontent.com/imvetri/ui-editor/master/docs/gifs/Screenshot.png)

![Screens](https://raw.githubusercontent.com/imvetri/ui-editor/master/docs/gifs/Layout_2.png)

![Screens](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/Back%20To%20First%20Design.png)

<br/>
<br/>

# Challenging Features

- **Code Generation at Warp Speed:** [Watch it in action](https://vimeo.com/386239546) – revolutionize component creation and maintenance.
- **Recursive Component Awesomeness:** [See the magic](https://vimeo.com/464104903) – can a component modify itself? Spoiler alert: yes!
- **Todo Application Mastery:** [Witness the creation](https://vimeo.com/511559933) of a typical TodoMVC, transcending the ordinary.
- **Reveal the Layers:** [Step into the future](https://vimeo.com/549552977) – abstracting the editor, revealing layers of tools for the ideal builder.
- **Layout Designer Extraordinaire:** [Experience the power](https://vimeo.com/554105526) of Select, Resize, Copy, Move, Delete in the builder toolbar.
- **The Infinite Display Saga:** [Embark on the journey](https://vimeo.com/554844159) towards a complete web development workflow – design tool, system manager, component composer, and more!

### Get Inspired - [Watch the Series](https://vimeo.com/manage/folders/2388312)

<br/>
<br/>

# Getting Started

Install NodeJS and Git. Then, unleash the power with these commands. Note: use nodejs < 16

```bash
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i (or try yarn install)
npm start

```
# Goals

## UX Design Tool
End result: A tool empowering users to create a multitude of rectangles and a design system. Define spacing inside/outside, color inside/outside, content type (text, image, another rectangle).
![UX Design Tool](https://user-images.githubusercontent.com/6542274/126032138-207c871a-988d-4aca-8338-5fef7dfd68fe.png)

## UI Builder
End result: A tool enabling users to create interactive components. Create all variants of a component, link them together with an event. Voila, you're done!
![UI Builder](https://user-images.githubusercontent.com/6542274/126032184-3ea1dfbf-7da7-444a-a29a-6ef020f7bc88.png)

## Schema Builder
End result: A tool allowing users to create business domain information – a.k.a one big fat JSON simplified as a class diagram. Develop ugly code for persistent storage, in-memory storage, and a protocol to access storage via web(HTTP). No session management – let users build their session management or integrate it into the schema. Create schemas for different auth and roles. Front UI builder will show/hide features based on this value.
![Schema Builder](https://user-images.githubusercontent.com/6542274/126032164-87b2ce4a-6c9a-4809-a87c-75316d0080ec.png)

# User Experience Design Inspiration

## Drawflow
Create components and their variants on the left bar, linking them to parents to compose larger components on the right pane.
![Drawflow](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/DrawFlow%20diagram.png?raw=true)

## GoJS State Chart
Create components with a click on the canvas, resize for spacing, connect with other components for composition.
![GoJS State Chart](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/GoJS,%20state%20chart.png?raw=true)

## WebGL State Diagram
Create nodes that connect with one another with field values in the form of text. This is the initial inspiration leading to other designs.
![WebGL State Diagram](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/WebGL%20state%20diagram.png?raw=true)

## Stately
Treating the component design and variants as states, here is an interface that helps to design on a pane and allows the user to simulate the changes on another pane.
![Stately](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/Stately.png?raw=true)

# User Experience

- Users should be able to design and interact, drawing inspiration from Stately.
- Users should be able to create a new component, resize on the fly by clicking on the pane – inspired by GoJS State Diagram.
- Users should be able to zoom in and out with infinite space possibilities.
- Users should be able to add images.

Next steps: Get rid of unwanted code from Excalidraw, retaining only rectangle and arrow shapes.

# Features

## Separation of Concerns
Modern frameworks tend to mix and match view, styling, callbacks in a single file. Considering individual opinions on separation of concerns, I moved view, style, state, callbacks into separate interfaces, keeping things clean.

## Component Composability
Component-driven development is the trend where we develop lower, more atomic components and build bigger components using the smaller ones. Instead of using tools like redux, hooks to manage the state between the components, mirror the event model of the DOM that bubbles upwards to components. By following this technique, we can build pages from bottom upwards.

## Code Generation
This IDE separates concerns, aids in component composability, and facilitates readable code by putting everything together as a React component. The code generation is an independent utility script that can be formatted to generate code for JSX, style, state in separate files. The current version generates all of them together as a string, printing it on the browser console.

## Slick
Everything is data. HTML, CSS, State, Events, Reducers – all just strings. Code generation is a knacky technique based on the fact that everything is just a string. Pass a string to eval with Babel, and you get a runtime in the browser.

# Contributions

This project, designed with one happy path in mind, requires a substantial effort to enhance the user experience. Typing JSX, CSS, state, events, and reducers without code formatters and prediction is challenging. The component explorer needs a smoother look, and the renderer can be extended to support different devices. The project has the potential to evolve into a UX design tool, and with code generation already in place, it becomes powerful in terms of time to build components. If you know someone willing to moderate the project or bring in more contributors, please spread the word. Your help and support can make a quick journey. Feel free to reach out if you have free time to spare: [Twitter](https://twitter.com/VetrivelShanmu3).

1. **Moderator**: Bring in UX designers – their perspective and contribution will make the experience smoother. Bring in initial users, document needed features, and bring in technical writers.
2. **UI Developers**: Make visual changes and implement features.
3. **Utility Developers**: Code generators (it's just a string, doesn't use any fancy design pattern), Fixed styled div to DOM layout flow (Just convert fixed style to padding and margins).

# Communication

- Open an issue.
- Checkout [Discord](https://discord.com/channels/901346023283232798/901346023773990954).
- Reach out on [Twitter](https://twitter.com/VetrivelShanmu3) or [Email](mailto:svetrivel.91@gmail.com).
