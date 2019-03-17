const {saveElement} = require("../Reducer")

// 1.saveElement should reset the state value to init state.
console.assert(saveElement("<input>") === null)