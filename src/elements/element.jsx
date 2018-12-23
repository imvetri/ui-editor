

let addElement = document.getElementById("addElement");
let saveElement = document.getElementById("saveElement");
let markup = document.getElementById("code");
let elementName = document.getElementById("elementName");
let addEvent = document.getElementById("addEvent");
let addElementState = document.getElementById("addElementState");

const createElement = ()=>{
    // 1. Find existing solution for this

    // 1. prompt jsx element editor with name editing place.
    $(".popupEditor").toggle("show")
    // 2. It should allow only valid html elements. 
    // 3. Changes should be vislible in below preview pane. on save this data should be available {elementName:"name", markup: "", events: "", states: []}
    // 4. Preview pane should also have style editor on it as form of icon from
    // react studio/ webflow / any inspired place.
    // 5. on save, element title shold be visible on elements tab and selected.
}

const saveElementDetails = () => {
    // 1. Fetch element name.
    let element = {
      elementName : elementName.value,
      markup : "",
      events : [],
      states : []
    }
    // 2. Fetch markup.
    // 3. Create a new element object and save these data.
    // 4. Update state of the UI with new details so that events/preview/states tab gets rerendered.
    // 5. Later organise code or consider using a build system with react.

}

const createEvent = () => {
    // 1. Find list of events avilable - should it be mouse/keyboard events or element specific event?
        /**
         * hover
         * click, dblclick, change, blur, focus
         */
    // 2. Just show all events
    /**
       Touch
     * *****
     *  touchstart / touchend
     *  touchmove / touchcancel
     * 
       Timer
     * *****
     *  setTimeout / clearTimeout
     *  setInterval / clearInterval
     * 
       Mouse
     * *****
     * click / dblclick
     * mousedown / mouseup
     * mouseenter / mouseover / mouseleave / mouseout
     * mousemove
     * mousewheel
     * wheel
     * contextmenu
     * 
       Keyboard
       ********
     * keydown / keypress / keyup
     * input
     * 
     * Drag / drop
     * ***********
     * drag
     * dragstart / drag / dragend
     * dragenter / dragover/ dragleave
     * drop  
     */

    // 0. it should receve some dummy data from the default state. - Object.
    // 1. show list of events available for the element.
    // 2. on click of any event, it should be shown in the lists.
    // 3. on click of any event in the list, it should show options for dispatch action name.
    // 4. after Action name it should ask for a reducer function to modifiy the state. - functions
    // 5. Number of reducer functions should equal to number of actions.
    // 6. An event can dispatch only one action. but multiple components can subscribe to single action.
}

const createState = () => {
    // 1. Should show list of states as equal to number of reducer functions/events/actions it has.
    // 2. It can receive state from parent.
}
addElement.addEventListener("click", createElement);
saveElement.addEventListener("click", saveElementDetails);
addEvent.addEventListener("click", createEvent);
addElementState.addEventListener("click", createState);

