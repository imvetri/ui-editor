import React, { Component } from 'react';
class NestedComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
"name":"vetri",
"text":"vel"
};
    }

    
spanID2onClick () {
this.setState({
"name":"lala"
})
}

buttonID3onClick () {
this.setState({
"text":"VEL"
})
}

    render() {

        return (<div id="ID1">
<span id="ID2" onClick={this.spanID2onClick.bind(this)}>{this.state.name}</span>
<button id="ID3" onClick={this.buttonID3onClick.bind(this)}>{this.state.text}</button>
</div>)
    }
}

export default NestedComponent;