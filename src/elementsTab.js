let addElement = document.getElementById("addElement");
let addEvent = document.getElementById("addEvent");
let addElementState = document.getElementById("addElementState");

const createElement = ()=>{
    // 1. prompt jsx element editor with name editing place.
    // 2. It should allow only valid html elements.
    // 3. Changes should be vislible in below preview pane.
    // 4. Preview pane should also have style editor on it as form of icon from
    // react studio/ webflow / any inspired place.
    // 5. on save, element title shold be visible on elements tab and selected.
}

const createEvent = () => {
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
addEvent.addEventListener("click", createEvent);
addElementState.addEventListener("click", createState);

