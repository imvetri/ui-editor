<div align="center">
  <a href="https://github.com/imvetri/ui-editor">
    <img width="200" height="200" src="https://github.com/imvetri/ui-editor/blob/master/docs/logo_size.jpg">
  </a>
  <br>
  <br>
  
  [![Build Status](https://travis-ci.com/imvetri/ui-editor.svg?branch=master)](https://travis-ci.com/github/imvetri/ui-editor/)

  <br>
  <p>
    ui-editor is a web based interface builder built using reactjs. Its purpose is to build interfaces for rapid application development. It's aim is to forget learning framework syntax and focus on building just the components using jsx, state, events.
  </p>
 <p>
    It started as an experimental tool to test readable code generation and it was a success. Since then, I have been experimenting with it to test instant renderer and it was a success too.
  </p>
<p>
Most recently I tried to build a self editable compoment that can create children of itself and it worked. Checkit out the <a href="https://vimeo.com/464104903">recorded video</a> . It also comes with an option to edit the styles and it's interesting.
</p>

</div>

### Demo - https://imvetri.github.io/ui-editor/ 
Update - its Broken

![Screens](https://user-images.githubusercontent.com/6542274/128317793-46680b02-ff49-4ce2-82ad-d88317f71385.png)


### Challenging features
* <b>Code generation</b> - https://vimeo.com/386239546 - this feature speeds up component creation and maintenance duration.

* <b>Recursive component</b> - https://vimeo.com/464104903 - I attempted to test whether a component can be modified using itself.

* <b>Sample Application - Todo</b> - https://vimeo.com/511559933 - I tried to recreate a typical todoMVC, and reuse the code in reactJS codebase.

* <b>Reveal</b> - https://vimeo.com/549552977 - I'm attempting to abstract the editor. I wanted to reveal layer by layers of tools that will be part of an ideal builder and this is the firs step. I had built a recursive component called Div using the editor, I find it has the most reusable and efficient design so I made it as part of the codebase and will help me to build a design tool. Mystry Revealed.

* <b>Layout Designer</b>  - https://vimeo.com/554105526 - Implemented Select, Resize, Copy, Move, Delete as part of the builder toolbar.

* <b>The Infinite Display</b> https://vimeo.com/554844159 - First step towards infinite display. This is a start for a complete web development workflow that stretches across. In web development requirement start with a visual concept that gets converted into a working version by web developers with API developed by backend followed deployments and testing in different environment before it reaches live. I'm going to create an ugly version of that. Design tool, design system manager, component composer, event manager, page manager, Schema creator. **Backend is read and write, frontend is show or hide**.

* <b>Drag and drop - Simple components</b> https://vimeo.com/642926286 - Any components can be dragged and dropped on the builder to compose bigger components. This is just a PoC and plans for complex component composability is in future feature list. 

* <b>Drag and drop - Complex component - Todo Component</b> - Tried and tested. https://vimeo.com/642966428 Drag and drop renderer work flawlessly with complex components without tampering its functionality. 

* <b>Drag and drop - Multiple drop points </b> https://vimeo.com/642968726 In this I tried to create a layout with different points having different components both simple and complex component. It works!

### Getting Started


```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```

### Goals
* <b>UX design tool</b> - End result - tool should be allow users to create bunch of rectangles, and a design system (spacing inside, spacing outside, color inside, color outside, content type - text, image, another rectangle)
![image](https://user-images.githubusercontent.com/6542274/126032138-207c871a-988d-4aca-8338-5fef7dfd68fe.png)

* <b>UI builder</b> - End result - tool should allow user to create interactive components. Or allow user to create all variants of a component, other components, link them together with an event. tada, done.

![image](https://user-images.githubusercontent.com/6542274/126032184-3ea1dfbf-7da7-444a-a29a-6ef020f7bc88.png)

* <b>Schema builder</b> - End result - tool should allow user to create business domain information. a.k.a one big fat json simplified as a class diagram. The tool developer (which is me for now) will figure out generating ugly code for a persistent storage, in-memory storage, a protocol to access the storage via web(http). WITHOUT SESSION MANAGMENT. Let the users build their own session management or create that as part of the schema itself. yeah right, create schema for users for different auth and roles. front UI builder will either show / hide features based on this value.

![image](https://user-images.githubusercontent.com/6542274/126032164-87b2ce4a-6c9a-4809-a87c-75316d0080ec.png)


### Features
* <b>Seperation of concerns</b> - Modern frameworks tend to mix and match view, styling, callbacks in single file. There are other best practices like maintaining a separate file as separation of concerns but each is an individual's opinion and will confuse a lot to beginners who are new. Taking that into consideration, I moved view, style, state, callbacks into separate interfaces and it separated the concerns.

* <b>Component composability</b> - Component driven development is the trend where we develop lower, more atomic components and build bigger components using the smaller ones. During that process we tend to use toolings such as redux, hooks to manage the state between the components. Instead, we can mirror the event model of DOM that bubbles upwards to components. In this technique a child component can publish actions and a parent component can subscribe to it. This event will carry information about child component's state, source of event and index of the child. By following this technique we can build page from bottom upwards.

* <b>Code generation</b> - This IDE seperates the concerns, helps in component composability and helps in getting a readable code by putting all of them together as a react component. This code generation is an independent utility script that can be formatted to generate code as per the needs such as jsx, style, state in a separate file. The current version generates all of them together as a string and it gets printed on browser console.

* <b>Slick</b> - Everything is data. HTML, CSS, State, Events, Reducers are all just strings and Code generation is a knacky technique based on the fact that everything is just a string. Pass a string to eval with babel, you get a runtime in browser.

### Ideas
* <b>Svelte code generator</b> - Easy - Clean design, clean separation of concern, Simple.
* <b>Vue code generator</b> - Not possible - Bad design, bad separation of concern, over complicated techniques.
* <b>React ripper</b> - Interesting - Modify reactjs createElement function, keep track of the calls. Wont do because code around the createElement looks ugly. You can use this to clone/rip off other's website and reuse their components without having to write your own.
* <b>Minimalist designers tool</b> - Productivity - swipe right and use toolbar + designer tool to create concepts or atleast decorated rectangles.

### Contributions
This project is built with one happy path in mind and needs a lot of effort to improve the user experience. It is very hard to type the jsx, css, state, events and reducers without code formatters and code prediction. The component explorer needs more smoother look, The renderer can be extended to support different devices. This project has more potential to evolve into a UX design tool and that is one step where the project can head,and with code generation already in place, it will be more powerful in terms of time to build components. If you know someone who is willing to moderate the project, bring in more contributors please spread a word.  With your help and support we can reach there real quick. Please feel free to reach out to me if you have free time to spare https://twitter.com/VetrivelShanmu3.

1. Moderator -Duty to bring in UX designers, UX help is very much needed as the tool is very rough, their perspective and contribution will definitely help to make the experience smoother.(I can just add animation on hover but the colors look amazing to me but terrible to others), to bring in initial users, to document needed features, to bring in technical writers.
2. ui-developers - To make visual changes, to implement features.
3. Utility developers - Code generators (its just string, doesn't use any fancy design pattern), Fixed styled div to DOM layout flow (Just convert fixed style to padding and margins )

### Communication
* Open Issue
* checkout discord https://discord.com/channels/901346023283232798/901346023773990954 
* reachout to me https://twitter.com/VetrivelShanmu3


<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
