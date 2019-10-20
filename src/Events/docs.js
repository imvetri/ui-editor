/**
 * What Events do?
 * Events render events of an element.
 * 
 * What it provides?
 * Events provide option to choose target tag to bind event
 * Events provide option to write a event and a callback
 * 
 * What does it publish? - onEventsUpdate
 * 
 * When is it called ? - onClick of save button
 * 
 * What data does onEventsUpdate publish ? - New details of the events.
 **/


/* HOW IT WORKS
 * It provides option to choose target tag to bind event. This is populated using element.markup details. 
 * markup is a string type which is passed to getNodeTree that returns react render tree that contains nodes of the tree.
 * 
 * It returns an object containing result and error. # Dev comment - Always check for error before using result.
 */

 /*
 * How it provides option to write event and callback? 
 * Elements object contains details about event in event property. Each event has name, callback/reducer function, id. It is rendered using <Event />
 */