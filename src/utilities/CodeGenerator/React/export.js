import {addChildren, addChildrenConfig, addEvents} from "./markup";
import {getReducers} from "./reducers";

// Elements to  react component.
export function convertToReact (component){

    component.events.forEach(event=>{
        event.id = event.id.replace("-","");
    })

    /**
     * Code generation for markup
     * 
     * Markup is edited in three phases.
     * 1. Add props - This function changes markup to include children - helps in composing bigger components. 
     *  For example, lets say an accordion component is created, its behaviour includes expanding contents and
     *  collapsing contents where content could be valid html tags, other components. An easy way to create such 
     *  separated concerns in behaviour is embedding children.
     * 
     * 2. Add Children config - This helps to override child config state from parent and render list of children.
     * 
     * 3. Add events - This helps to bind event listenes to markup 
     */

    let propsInMarkup = addChildren(component);
    let childrenMarkup = addChildrenConfig(propsInMarkup, component);
    let componentEventedMarkup = addEvents(childrenMarkup, component.events, component);


    /**
     * Code generation for reducers
     * 
     * Reducer function are created in a single phase.
     * 
     * getReducers takes a component and returns reducer functions based on following rules.
     * 1. Generation of function name - It appends event id with event name 
     * 2. Generation of function definition
     *      1. Generation of a new state - Creates a new state with help of json.strigify and parse
     *      2. Generation of reducer logic - event reducer is appeneded here. 
     *      3. Generation of publishable event - It also publishes events based on the event type.
     */
    let reducers = getReducers(component)
    
    let ReactComponent = 
`
class ${component.name} extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state || ${component.state};

        // Generate css as a separate file on download
        
        var style = document.createElement('style');
        style.innerHTML = \`${component.style}\`;
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    ${reducers}

    render() {
        return (${componentEventedMarkup})
    }
}
`
    return ReactComponent;
}