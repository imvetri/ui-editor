import style from "../Preview/Preview.css";


let markup = `<label id="labelComponent" className={style.box}>{state.name}</label>`;

let state = {
    name: "label component"
};

let LabelComponent = {
    markup: markup,
    state: state,
    style: style,
    events: {},
    children: []
}

export default LabelComponent;