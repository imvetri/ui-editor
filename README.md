<div align="center">
  <a href="https://github.com/imvetri/ui-editor">
    <img width="200" height="200" src="https://github.com/imvetri/ui-editor/blob/master/docs/logo_size.jpg">
  </a>
  <br>
  <br>
  <br>
  <p>
    ui-editor is a web based interface builder built using reactjs. Its main purpose is to build interfaces for rapid application development. It's main aim is to forget learning framework syntax and focus on building just the components using jsx, state, events.
  </p>
 <p>
    It started as an experimental tool to test readable code generation and it was a success. Since then, I have been experimenting with it to test instant renderer and it was a success too.
  </p>
<p>
Most recently I tried to build a self editable compoment that can create children of itself and it worked. Checkit out the <a href="https://vimeo.com/464104903">recorded video</a> . It also comes with an option to edit the styles and it's interesting.
</p>

</div>

### Demo - https://imvetri.github.io/ui-editor/
### Recorded demos
Code generation - https://vimeo.com/386239546 - this feature speeds up component creation and maintenance duration.

Recursive component - https://vimeo.com/464104903 - I attempted to test whether a component can be modified using itself.

Latest - Todo Application - https://vimeo.com/511559933 - I tried to recreate a typical todoMVC, and reuse the code in reactJS codebase.

### Getting Started


```
git clone https://github.com/imvetri/ui-editor.git
cd ui-editor
npm i
npm start

```

### Features
* <b>Seperation of concerns<b> - Modern frameworks tend to mix and match view, styling, callbacks in single file. There are other best practices like maintaining a separate file as separation of concerns but each is an individual's opinion and will confuse a lot to beginners who are new. Taking that into consideration, I moved view, style, state, callbacks into separate interfaces and it separated the concerns.

* <b>Component composability</b> - Component driven development is the trend where we develop lower, more atomic components and build bigger components using the smaller ones. During that process we tend to use toolings such as redux, hooks to manage the state between the components. Instead, we can mirror the event model of DOM that bubbles upwards to components. In this technique a child component can publish actions and a parent component can subscribe to it. This event will carry information about child component's state, source of event and index of the child. By following this technique we can build page from bottom upwards.

* <b>Code generation</b> - This IDE seperates the concerns, helps in component composability and helps in getting a readable code by putting all of them together as a react component. This code generation is an independent utility script that can be formatted to generate code as per the needs such as jsx, style, state in a separate file. The current version generates all of them together as a string and it gets printed on browser console.


### Contributions
This project is built with one happy path in mind and needs a lot of effort to improve the user experience. It is very hard to type the jsx, css, state, events and reducers without code formatters and code prediction. The component explorer needs more smoother look, The renderer can be extended to support different devices. This project has more potential to evolve into a UX design tool and that is one step that needs filling, with code generation already in place, it will be more powerful in terms of time to build components. If you know someone who is willing to moderate the project, bring in more contributors please spread a word.  With your help and support we can reach there real quick. Please feel free to reach out to me if you have free time to spare https://twitter.com/VetrivelShanmu3.


<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

