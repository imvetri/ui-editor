import style from "./Preview.css";
import labelComponent from "./LabelComponent";

let markup = `<input type='text' id="secondInput" className={style.box} value={state.name} {...events}/>`;

let state = {
    name: "Second Component"
};

let events = {
    onChange: function a(e) {
        this.setState({
            name: e.target.value
        })
    },
    onFocus: function a() {
        console.log("FOCUSSED_EVENT");
        this.setState({
            name: "Second Component"
        })
    }
};

let InputComponent = {
    markup: markup,
    state: state,
    events: events,
    style: style,
    children: [labelComponent]
}

export default InputComponent;