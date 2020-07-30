
Effortless technique to build components that works across frameworks.


## Demo - https://imvetri.github.io/ui-editor/

## Manual
1. Click Components ->Editor - It is a simple ux editor I planned of building but not for sometime.
2. Right click black area -> Draw - The context menu has some operations working fine.
3. Press Alt+R to read events and reducers of child components, elements
4. Press Alt+E to see source code

## Workflow and internals

![](https://github.com/imvetri/ui-editor/blob/master/docs/gifs/ui-editor-workflow-and-internals.3.png)

OUTDATED but do watch :)

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


```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```


## Disclaimer

This is not 

- [x] usable
- [x] testable using typical unit tests / visual test. Run the project. Select Components -> Editor. Right click black area 'Draw'. Draw some rectangles. Right click black area 'Text' Type something. If it works, it goes through all the coverage. One happy path for one working version and thats enough.  
- [x] futuristic solution to solve community problems
- [x] rant on others work

This is

- [x] fun.
- [x] show off what web browsers can do.
- [x] a popular framework is abstracted so can other frameworks too. 


What are all the potentials of these experiements?

- [x] Build a tool to build components on screen and generate code. 
- [x] A tool to convert designs to code that is readable.
- [x] Eliminate time spent on unit testing, visual testing, behaviour testing and every other testing. Sovle problem right.
- [x] Software is meant to solve problem. Solve it once, Solve it right. Sit back and tie hads behind head and enjoy the view for a second. 
- [x] Game builder
- [x] Tool builder
- [x] Application builder


## Ideas looked out

- [x] Need a simple view layer that responds to data - ReactJS. Because angular is heavy for head, jquerymobile lacked something.
- [x] An atomic, scalable, composable system to build pages and interactive items - Found the concept of components and it lacked message passing.
- [x] A standard for components - None. Disappointment, anger.
- [x] Message passing model for components - took inspiration of browser event model and applied on component model. Excitement.
- [x] A transpiler that can work in browser - babel-core. Happy.
- [x] An execution context within browser context - eval - double happy.
- [x] Need to choose a syntax for component - React class component - slick. Message passing from parent to child - use state and props. Message passing from child to parent - Pass a callback in prop. Simple.
- [x] Requirements to components - Acceptance criteria in gherkins to component and component variants as sub tree. Learnt a lot here, visually different state is a variant, thats just, css. javascript does the state transistion via events, events are bound to elements and the dots connected very well. But, touching requirement is not fun. bye bye to automated component coverage. Coverages kill fun. and not so much puzzle for head.
- [x] Need a syntax to embed a child component - Simple with reactJS and JSX. Put the component name in form of tag - funny and confident as concept gains strength as child component now resembles an element with publishable events. More confidence as core concept remains strong.
- [x] Enough of thinking and drawing sketches. Its not real unless its taken out.

## Experiments

- [x] Put Component markup, style, state as inputs and call it an Editor - Fun
- [x] Patch them together and call it a Component string generator - double Fun
- [x] Run Component string through babel transpiler. Pass it to eval and call it a component evaluator - Tough times. but had a good kick.
- [x] Component renderer - Edgy idea. A component renderer on screen with editable input on screen is flawless. So much tooling can be built on top.
- [x] Component with dynamic data - Thrilling. on click of a button, change the data shown on screen.
- [x] Component with dynamic styling - hmm. About this. it includes css. finished it using style object and classes. Snapped out of this as quick as possible.
- [x] Movable, collapsable panels for each purpose - inspired by gimp, adobe, game builder products, but not usable. Switched to plain panels apearing from sides. - Not interesting. Bad for Head
- [x] Component to embed child component - This was something which worked just like that. - More confidence to do more stuffs.
- [x] Component to alter child component's initial state - Figured out. A parent state should decide child's data so put the child's state as an object in parent's state. If array is empty don't render, else render. this also helped to render lists. one stone, two mangoes. 
- [x] Component to subscribe to child's event. Make a child component's event publishable. done. It was fruitful only when I played with it, not while coding.
- [x] More components to mange - Need a folder management and component management - Created an explorer. Needed feature.
- [x] Need to load images - Created Assets.
- [x] Need to track history - Did, but didnt complete. History can be faked. 
- [x] Lets build a ux design tool using this - Very bad move. but made conditional multiple publish from a reducer which is a necessary concept. - Lesson learnt. 
- [x] Component drag and drop builder - bad experience. Moving mouse on top of a rendered component to detect parent child div, and drop logic is not worth.   - Not intersting. Bad for head.
- [x] At this point I have realised the fun faded. No more helping the community but it will hit back. So I thought I'll discontinue this. Two days break and realised there is more experiments to do.

## Experiments to watchout and not chase

- [ ] Generate code for svelte, vue, angular - but wont do. Its the same technique of code generation and does not bring any joy.
- [ ] Generate a boiler plate for backend - but wont do. DOM API is good enough to play with browsers. AJAX API, or any other API does the same thing.
- [ ] Build ux tool - Nope. not at all interesting
- [ ] Integrate ux tool within the ui-editor and provide immediate editing and design/ style changes to respond to the client's requirement. No chance
- [ ] Closely watch the browser's API updates and convert them in form of configurable interfaces to speed up fancy things - Jinxed.

## Experiments to chase
- [ ] Just put this out.
- [ ] Provide help to somebody else solving the same problem. Not for closed commercial product, but for the open community.
- [ ] SNAP OUT FROM FRONT END CODING. Its not interesting anymore.
- [ ] SNAP OUT. FRAMEWORK EXPERIEMENTS STARTED BORING.
- [ ] SNAP OUT. WEB DEVELOPMENT problem is not interesting either at front end / backend.
- [ ] SNAP ON - Neural networks - Nope not yet. Concept of artificial neuron is fundamentally flawed and the entire communnity is a pyramid on a tip. 
- [ ] SNAP on - AI system design - hmm, started a repo with one design. Good.
- [ ] Hope this is the last commit. Stop joking around. 

You can contact me https://twitter.com/VetrivelShanmu3 for any questions, I'll be glad to help.

