/**
 * Editor tab
 * 
 * Remvoe usage of ID - instead use component.name+UNIQUEID. 
 * Hide ID from Editor->markup
 * Show nested component <nestedComponent/> only in Editor-> markup
 */

 // ENHANCEMENTS-ONLY

 /**
  * Events tab
  * 
  * Show option for events to be publishable with name.
  * Show publishable events from nestedComponent
  * 
  */

// CODE MODIFIER FOR EXPORTING COMPONENTS

// CODE MODIFIER FOR COMPONENTS WITH CHILD

/**
 * Elements tab
 * 
 * onExport console.log usage. A component can have publishable events so that importing component could subscribe to it.
 */


 // CODE MODIFIER FOR COMPONENT WITH CHILD.
    
 /**
  * Preview tab
  * 
  * For all unidentified components
  *     currentComponent.markup = currentComponent.markup.replace("<nestedComponent.name/>", unidentifiedComponent.markup)
  *     currentComponent.state = Object.assign({}, unudentifiedComponent.state, currentComponent.state) 
*         // Problem - similair properties will be overriden. 
          // Workaround - prefix unidentifiedComponent properties with unidentifiedComponent.name

    Define child component - 
          // This is going to create a new decision problem for deciding how the new state should become when a child component state to be merged with parent component.
          // Child component should have individual state and should be changed only with within. 
          // Child component state should be constructor initialised from the parent component.
          // Child component state should be updated only by its reducers.
          // Child component can publish its state to parentComponent via publish events.

    As per above, we cannot push/override/merge child component state with parent component state.
    Parent componenent should have a new property that will hold state of the child.
    Parent component shall send its state to child during constructor / always during rerender?

    Lets keep it simple. New property on parent, will be passed as state to child. Will be used during constructor as well as rereder.


    Again - Back to solution. For each of child component do this.
  * 3. childComponent.markup.replaceAll("{state.","{state.${currentComponent.name}")
  * 1. currentComponent.markup = currentComponent.markup.replace("<nestedComponent.name/>", childComponent.markup)
  * 2. currentComponent.state[childComponent.name] = childComponent.state;
  * 4. Events - There wouldn't be any change required.
  */