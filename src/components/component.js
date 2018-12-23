let addComponent = document.getElementById("addComponent");
let addAction = document.getElementById("addAction");
let addcomponentState = document.getElementById("addComponentState");

const createComponent = () => {
    // 1. prompt markup editor that provides access to elements that are created already.
    // 2. it should receive dummy data from the default state.
    // 3. on click of save, it should show component name in component list making it selected.
}

const createAction = () => {
    // 1. On "add" it should prompt for action name, whether to publish it or subscribe from it.
    // 2. It can publish action after state change. (Element's event)/(Component's action)
    // 3. It can subscribe from list of available action 
    // 4. After subscribing, it should prompt for reducer function to be run.
    // 4. Number of subscribed actions = Number of states component has.
}

const createComponentState = () => {
    // 1. Should show list of states as equal to number of reducer functions/actions it is subscribed to.
    // 2. This state can be passed to the elements.
}
addComponent.addEventListener("click", createComponent);
addAction.addEventListener("click", createAction);
addcomponentState.addEventListener("click", createComponentState);

