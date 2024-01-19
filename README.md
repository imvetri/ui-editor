<div align="center">
  <a href="https://github.com/imvetri/ui-editor">
    <img width="200" height="200" src="https://github.com/imvetri/ui-editor/blob/master/docs/logo_size.jpg">
  </a>
  <br>
  <br>
  
  [![Build Status](https://travis-ci.com/imvetri/ui-editor.svg?branch=master)](https://travis-ci.com/github/imvetri/ui-editor/)

  <br/>
</div>

# Unleash 🔥

## About

Welcome to **ui-editor**, where I strive to make the machine work for me, not the other way around. This cutting-edge, web-based interface builder, powered by ReactJS, is your key to rapid application development. Forget wrestling with framework syntax – focus on building components using jsx, state, and events.

What began as an experimental tool for readable code generation has evolved into a powerhouse for instant rendering. Witness its capabilities in action through the [recorded video](https://vimeo.com/464104903) and the mesmerizing [drag-and-drop feature](https://vimeo.com/642968726). Not to mention, it allows you to edit styles – talk about intriguing!

And that's not all! I've integrated react-flow for an infinite canvas. Check out the mind-blowing demo [here](https://www.youtube.com/watch?v=Sfe6Qobn8vo).

### See it in action - [Demo](https://imvetri.github.io/ui-editor/)

#### Draw on left, see the code on right (working on it)
<img width="612" alt="excalidraw+ui-editor" src="https://github.com/imvetri/ui-editor/assets/6542274/4a736ffe-2e7f-4c18-aba9-9027d7ed2dd2">


### Explore More - [Wiki](https://github.com/imvetri/ui-editor/wiki)

### Crisp - [Illustrative story](https://www.linkedin.com/pulse/introducing-web-designers-developer-vetrivel-shanmugam/)


<br/>
<br/>



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
