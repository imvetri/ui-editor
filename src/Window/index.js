import React, { Component } from 'react';

/*
    This component adds behaviour to the child components with colapse and move the component around.
    This component stores the config to local storage
    This component restores the postion on reload
*/

class Window extends Component {
    constructor(props) {
        super(props);
        this.childComponentName =  this.props.children._owner.stateNode.__proto__.constructor.name;
        let config = localStorage.getItem(this.childComponentName);
        this.state = config ? JSON.parse(config) : {
            collapsed: false,
            top: 0,
            left: 0
        };
    }

    persist(){
        if(this.state.top!==0)
        localStorage.setItem(this.childComponentName , JSON.stringify(this.state))
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        })
        this.persist()
    }

    drag(e){
        this.setState({
            left: e.pageX,
            top: e.pageY
        })
        this.persist()
    }

    render() {
        let windowState = this.state.collapsed? "fas fa-window-minimize": "fas fa-window-maximize"
        return (
                <div 
                    style={{position: "fixed", top : this.state.top, left: this.state.left}}>
                    <div>
                        <button 
                            draggable="true"
                            onDragEnd={this.drag.bind(this)}
                            className="container" >
                                <i class="fas fa-arrows-alt"></i></button>
                        <button className="container" onClick={this.toggle.bind(this)}><i class={windowState}></i></button>
                        {this.state.collapsed?null:
                            <div class="container elements-tab">
                                <div class="title">{this.childComponentName}</div>
                            </div>}
                    </div>
                    <div>
                        {this.state.collapsed?this.props.children:null}
                    </div>
                </div>
        );
    }
}

export default Window;
