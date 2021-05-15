// Libraries.

import React, { Component } from "react";

// Styles.

import "./style.css";

class PropertiesControl extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state || {
            "style": {
                "top": "100px",
                "left": "408px",
                "position": "absolute"
            },
            "height": "100px",
            "width": "100px",
            "top": "100px",
            "left": "100px",
            "borderWidth": "100px",
            "borderColor": "#874a4a",
            "space": "100px",
            "fontSize": "10px",
            "color": "#ffffff"
        };
    }


    lessheightonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let height = Number(state.height.split("px")[0]) - 1;
        state.height = height + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onHeightChange ? this.props.onHeightChange(e) : null;
        }
    }

    moreheightonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let height = Number(state.height.split("px")[0]) + 1;
        state.height = height + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onHeightChange ? this.props.onHeightChange(e) : null;
        }
    }

    lesswidthonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let width = Number(state.width.split("px")[0]) - 1;
        state.width = width + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onWidthChange ? this.props.onWidthChange(e) : null;
        }
    }

    morewidthonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let width = Number(state.width.split("px")[0]) + 1;
        state.width = width + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onWidthChange ? this.props.onWidthChange(e) : null;
        }
    }

    lesstoponClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let top = Number(state.top.split("px")[0]) - 1;
        state.top = top + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onTopChange ? this.props.onTopChange(e) : null;
        }
    }

    moretoponClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let top = Number(state.top.split("px")[0]) + 1;
        state.top = top + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onTopChange ? this.props.onTopChange(e) : null;
        }
    }

    moreleftonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let left = Number(state.left.split("px")[0]) - 1;
        state.left = left + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onLeftChange ? this.props.onLeftChange(e) : null;
        }
    }

    lessleftonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let left = Number(state.left.split("px")[0]) + 1;
        state.left = left + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onLeftChange ? this.props.onLeftChange(e) : null;
        }
    }

    lessborderonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let borderWidth = Number(state.borderWidth.split("px")[0]) - 1;
        state.borderWidth = borderWidth + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onBorderWidthChange ? this.props.onBorderWidthChange(e) : null;
        }
    }

    moreborderonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let borderWidth = Number(state.borderWidth.split("px")[0]) + 1;
        state.borderWidth = borderWidth + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onBorderWidthChange ? this.props.onBorderWidthChange(e) : null;
        }
    }

    morespaceonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let space = Number(state.space.split("px")[0]) + 1;
        state.space = space + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onPaddingChange ? this.props.onPaddingChange(e) : null;
        }
    }

    lessspaceonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let space = Number(state.space.split("px")[0]) - 1;
        state.space = space + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onPaddingChange ? this.props.onPaddingChange(e) : null;
        }
    }

    lessSizeonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let fontSize = Number(state.fontSize.split("px")[0]) - 1;
        state.fontSize = fontSize + "px";
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onFontSizeChange ? this.props.onFontSizeChange(e) : null;
        }
    }

    moreSizeonClick(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        let fontSize = Number(state.fontSize.split("px")[0]) + 1;
        state.fontSize = fontSize + "px";

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onFontSizeChange ? this.props.onFontSizeChange(e) : null;
        }
    }

    idonChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.classes = e.currentTarget.value
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    fontcoloronChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.fontColor = e.target.value;
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onFontColorChange ? this.props.onFontColorChange(e) : null;
        }
    }

    morecoloronChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.borderColor = e.target.value;
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onBorderColorChange ? this.props.onBorderColorChange(e) : null;
        }
    }

    propertiesonMouseMove(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation()
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    propertiesonMouseDown(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation()
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    propertiesonMouseOver(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation()

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    propertiesonMouseUp(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation()

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    borderStyleonChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.borderStyle = e.target.value;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onBorderStyleChange ? this.props.onBorderStyleChange(e) : null;
        }
    }

    render() {
        return (<div class="properties" id="properties" onMouseUp={this.propertiesonMouseUp.bind(this)} onMouseOver={this.propertiesonMouseOver.bind(this)} onMouseDown={this.propertiesonMouseDown.bind(this)} onMouseMove={this.propertiesonMouseMove.bind(this)} style={this.state.style} id="PropertiesControl" >{this.props.children}

            <div>
                <div>
                    <span class="name">Height</span>
                    <button class="less" id="lessheight" onClick={this.lessheightonClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.height} />
                    <button class="more" id="moreheight" onClick={this.moreheightonClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>
                <div>
                    <span class="name">Width</span>
                    <button class="less" id="lesswidth" onClick={this.lesswidthonClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.width} />
                    <button class="more" id="morewidth" onClick={this.morewidthonClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>
            </div>

            <div>
                <div>
                    <span class="name">Position</span>
                    <select name="position" value={this.state.position} id="position">
                        <option>static</option>
                        <option>relative</option>
                        <option>absolute</option>
                        <option>fixed</option>
                    </select>
                </div>

                <div>
                    <span class="name">Top</span>
                    <button class="less" id="lesstop" onClick={this.lesstoponClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.top} />
                    <button class="more" id="moretop" onClick={this.moretoponClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>
                <div>
                    <span class="name">Left</span>
                    <button class="less" id="moreleft" onClick={this.moreleftonClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.left} />
                    <button class="more" id="lessleft" onClick={this.lessleftonClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>
                <div>
                    <span class="name">Right</span>
                    <button class="less" id="lessRight"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.right} />
                    <button class="more" id="moreRight"><i class="fa fa-plus"></i></button>
                </div>
                <div>
                    <span class="name">Bottom</span>
                    <button class="less" id="moreBottom"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.bottom} />
                    <button class="more" id="lessBottom"><i class="fa fa-plus"></i></button>
                </div>
            </div>

            <div>
                <div>
                    <span class="name">Display</span>
                    <select name="display" value={this.state.display} id="display">
                        <option>block</option>
                        <option>inline</option>
                        <option>inline-block</option>
                        <option>flex</option>
                        <option>grid</option>
                    </select>
                </div>
            </div>

            <div>
                <div>
                    <span class="name">Border</span>
                </div>
                <div>
                    <span class="name">Width</span>
                    <button class="less" id="lessborder" onClick={this.lessborderonClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.borderWidth} />
                    <button class="more" id="moreborder" onClick={this.moreborderonClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>

                <div>
                    <span class="name">Color</span>
                    <input type="color" id="morecolor" onChange={this.morecoloronChange.bind(this)} value={this.state.borderColor} />
                </div>
                <div>
                    <span class="name">Style</span>
                    <select name="borderStyle" value={this.state.borderStyle} id="borderStyle" onChange={this.borderStyleonChange.bind(this)}>
                        <option>dotted</option>
                        <option>dashed</option>
                        <option>solid</option>
                        <option>double</option>
                        <option>groove</option>
                        <option>ridge</option>
                        <option>inset</option>
                        <option>outset</option>
                        <option>none</option>
                        <option>hidden</option>
                    </select>
                </div>
            </div>

            <div>
                <div>
                    <span class="name">Padding</span>
                </div>

                <div >
                    <span class="name">Top</span>
                    <button class="less" id="lesspaddingtop"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.paddingtop} />
                    <button class="more" id="morepaddingtop"><i class="fa fa-plus"></i></button>
                </div>
                <div >
                    <span class="name">Left</span>
                    <button class="less" id="morepaddingleft"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.paddingleft} />
                    <button class="more" id="lesspaddingleft"><i class="fa fa-plus"></i></button>
                </div>
                <div >
                    <span class="name">Right</span>
                    <button class="less" id="lesspaddingRight"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.paddingright} />
                    <button class="more" id="morepaddingRight"><i class="fa fa-plus"></i></button>
                </div>
                <div class="bottomPadding">
                    <span class="name">Bottom</span>
                    <button class="less" id="morepaddingBottom"><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.paddingbottom} />
                    <button class="more" id="lesspaddingBottom"><i class="fa fa-plus"></i></button>
                </div>
            </div>



            <div>

                <div>
                    <span class="name">Font</span>
                </div>
                <div>
                    <span class="name">Family</span>
                    <input type="text" class="long" value={this.state.fontFamily} />
                </div>
                <div>
                    <span class="name">Size</span>
                    <button class="less" id="lessSize" onClick={this.lessSizeonClick.bind(this)}><i class="fa fa-minus"></i></button>
                    <input type="text" value={this.state.fontSize} />
                    <button class="more" id="moreSize" onClick={this.moreSizeonClick.bind(this)}><i class="fa fa-plus"></i></button>
                </div>

                <div>
                    <span class="name">Color</span>
                    <input type="color" id="fontcolor" onChange={this.fontcoloronChange.bind(this)} value={this.state.color} />
                </div>
            </div>
        </div>)
    }
}

export default PropertiesControl;