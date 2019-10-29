import { Component } from "react";
import React from "react";

import "./cssstyle.lcss";
import { colorChange
    ,backgroundColorChange
    ,fontSizeChange
    ,fontFamilyChange
    ,fontStyleChange
    ,fontWeightChange
    ,textTransformChange
    ,textDecorationChange
    ,textAlignChange
    ,letterSpacingChange
    ,wordSpacingChange
    ,widthChange
    ,heightChange
    ,marginLeftChange
    ,marginRightChange
    ,marginBottomChange
    ,marginTopChange
    ,paddingLeftChange
    ,paddingRightChange
    ,paddingBottomChange
    ,paddingTopChange
    ,borderLeftChange
    ,borderRightChange
    ,borderBottomChange
    ,borderTopChange
    ,borderColorChange
    ,displayChange
    } from "./Reducer";

class CssBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'color': "#fff",
            'backgroud-color': "#fff",
            'font-style': '',
            'font-family': '',
            'font-size': '8',
            'font-weight' :'',
            'text-transform' :'',
            'text-decoration': '',
            'letter-spacing': '',
            'word-spacing': '',
            'width': '',
            'height': '',
            'margin-left': '',
            'margin-right': '',
            'margin-top': '',
            'margin-bottom': '',
            'padding-left': '',
            'padding-right': '',
            'padding-top': '',
            'padding-bottom': '',
            'border-left': '',
            'border-right': '',
            'border-top': '',
            'border-bottom': '',
            'border-color': '',
            'display':''
        }
        this.state.expanded = false;
        this.state.className = "panel collapsed"
    }

    toggleCollapse(){
        this.setState({
            expanded: !this.state.expanded,
            className: !this.state.expanded ? "panel collapsed" : "panel expanded",
            show: this.state.expanded? "content" : "hide content"
        })
    }

    render() {
        return (
            <div>
                <div className="option-group">
                    <p className="option-group-label">
                        <span className="title">Text</span>
                        <span className={this.state.className} onClick={this.toggleCollapse.bind(this)}></span>
                    </p>
                    <div className={this.state.show}>
                        <div className="option">
                            <label>Color</label>
                            <input type="color" value={this.state['color']} onChange={colorChange.bind(this)} name="color" />
                        </div>


                        <div className="option">
                            <label>Background-color</label>
                            <input type="color" value={this.state['background-color']} onChange={backgroundColorChange.bind(this)} name="background-color" />
                        </div>

                        <div className="option">
                            <label>Size</label>
                            <input type="number" min="8" name="fontSize"  value={this.state['font-size']} onChange={fontSizeChange.bind(this)} />
                            <input list="fontSizeunits" value="PX" name="font-size"/>
                            <datalist id="fontSizeunits">
                                <option value="PX" />
                                <option value="%" />
                                <option value="EM" />
                                <option value="VW" />
                                <option value="VH" />
                                <option value="Auto" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Type</label>
                            <input list="fonts" name="font-family" value={this.state['font-family']} onChange={fontFamilyChange.bind(this)}/>
                            <datalist id="fonts">
                                <option value="Serif" />
                                <option value="Sans-serif" />
                                <option value="Monospace" />
                            </datalist>
                        </div>


                        {/* <div className="option">
                            <label>Font-style</label>
                            <input list="fontsStyle" name="font-style" value={this.state['font-style']} onChange={fontStyleChange.bind(this)}/>
                            <datalist id="fontsStyle">
                                <option value="Normal" />
                                <option value="Ittalic" />
                                <option value="Oblique" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Font-weight</label>
                            <input list="fontWeight" name="font-weight" value={this.state['font-weight']} onChange={fontWeightChange.bind(this)}/>
                            <datalist id="fontWeight">
                                <option value="normal" />
                                <option value="bold" />
                                <option value="lighter" />
                                <option value="bolder" />
                                <option value="Enter Number 100-900" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Text-Transform</label>
                            <input list="textTransform" name="text-transform" value={this.state["text-transform"]} onChange={textTransformChange.bind(this)}/>
                            <datalist id="textTransform">
                                <option value="uppercase" />
                                <option value="lowercase" />
                                <option value="capitalize" />
                                <option value="full-width" />
                            </datalist>
                        </div>

                        <div className="option">
                            <label>Text-Decoration</label>
                            <input list="textDecoration" name="text-decoration" value={this.state["text-transform"]} onChange={textDecorationChange.bind(this)}/>
                            <datalist id="textDecoration">
                                <option value="underline" />
                                <option value="overline" />
                                <option value="line-through" />
                            </datalist>
                        </div> */}


                        <div className="option">
                            <label>Text-Align</label>
                            <input list="textAlign" name="text-align" value={this.state['text-align']} onChange={textAlignChange.bind(this)}/>
                            <datalist id="textAlign">
                                <option value="left" />
                                <option value="right" />
                                <option value="center" />
                                <option value="justify" />
                            </datalist>
                        </div>


                        {/* <div className="option">
                            <label>Letter spacing</label>
                            <input type="number" min="8" name="letter-spacing" value={this.state["letter-spacing"]} onChange={letterSpacingChange.bind(this)}/>
                            <input list="letterSpacing" value="PX" />
                            <datalist id="letterSpacing">
                                <option value="PX" />
                            </datalist>
                        </div>


                        <div className="option">
                            <label>Word spacing</label>
                            <input type="number" min="8" name="word-spacing" value={this.state["word-spacing"]} onChange={wordSpacingChange.bind(this)}/>
                            <input list="wordSpacing" value="PX" />
                            <datalist id="wordSpacing">
                                <option value="PX" />
                            </datalist>
                        </div> */}
                    </div> 
                </div>

                <div className="option-group">
                    <p className="option-group-label">
                        <span className="title">Box</span>
                        <span className="panel expanded"></span>
                    </p>
                    <div className="content">
                        <div className="option">
                            <div>                            
                                <div>Size</div>
                                <div>
                                    <label>Width</label>
                                    <input type="number" min="0" name="width" value={this.state.width} onChange={widthChange.bind(this)}/>

                                    <input list="widthunits" value="PX" />
                                    <datalist id="widthunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                </div>
                            </div>
                            <div>
                                <label>Height</label>
                                <input type="number" min="0" name="height" value={this.state.height} onChange={heightChange.bind(this)}/>

                                <input list="heightunits" value="PX" />
                                <datalist id="heightunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="option">
                            <div>
                                <div>Margin</div>
                                <label>Margin-Left</label>
                                <input type="number" min="0" name="margin-left" value={this.state["margin-left"]} onChange={marginLeftChange.bind(this)} />

                                <input list="marginLeftunits" value="PX" />
                                <datalist id="marginLeftunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Right</label>
                                <input type="number" min="0" name="margin-right" value={this.state["margin-right"]} onChange={marginRightChange.bind(this)} />

                                <input list="marginRightunits" value="PX" />
                                <datalist id="marginRightunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Top</label>
                                <input type="number" min="0" name="margin-top" value={this.state["margin-top"]} onChange={marginTopChange.bind(this)} />

                                <input list="marginTopunits" value="PX" />
                                <datalist id="marginTopunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                                <br />

                                <label>Margin-Bottom</label>
                                <input type="number" min="0" name="margin-bottom" value={this.state["margin-bottom"]} onChange={marginBottomChange.bind(this)} />

                                <input list="marginBottomunits" value="PX" />
                                <datalist id="marginBottomunits">
                                    <option value="PX" />
                                    <option value="%" />
                                    <option value="EM" />
                                    <option value="VW" />
                                    <option value="VH" />
                                    <option value="Auto" />
                                </datalist>
                            </div>
                        </div>
                        </div>

                        <div className="content">
                            <div className="option">
                                <div>
                                    <div>Padding</div>
                                    <label>Padding-Left</label>
                                    <input type="number" min="0" name="padding-left" value={this.state["padding-left"]} onChange={paddingLeftChange.bind(this)} />

                                    <input list="paddingLeftunits" value="PX" />
                                    <datalist id="paddingLeftunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Right</label>
                                    <input type="number" min="0" name="padding-right" value={this.state["padding-right"]} onChange={paddingRightChange.bind(this)}  />

                                    <input list="paddingRightunits" value="PX" />
                                    <datalist id="paddingRightunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Top</label>
                                    <input type="number" min="0" name="padding-top" value={this.state["padding-top"]} onChange={paddingTopChange.bind(this)} />

                                    <input list="paddingTopunits" value="PX" />
                                    <datalist id="paddingTopunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Padding-Bottom</label>
                                    <input type="number" min="0" name="padding-bottom" value={this.state["padding-bottom"]} onChange={paddingBottomChange.bind(this)} />

                                    <input list="paddingBottomunits" value="PX" />
                                    <datalist id="paddingBottomunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                </div>
                            </div>
                        </div>


                        <div className="content">
                            <div className="option">
                                <div>
                                    <div>Border</div>
                                    <label>Border-Left</label>
                                    <input type="number" min="0" name="border-left" value={this.state["border-left"]} onChange={borderLeftChange.bind(this)}  />

                                    <input list="borderLeftunits" value="PX" />
                                    <datalist id="borderLeftunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Right</label>
                                    <input type="number" min="0" name="border-right" value={this.state["border-right"]} onChange={borderRightChange.bind(this)}   />

                                    <input list="borderRightunits" value="PX" />
                                    <datalist id="borderRightunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Top</label>
                                    <input type="number" min="0" name="border-top" value={this.state["border-top"]} onChange={borderTopChange.bind(this)}   />

                                    <input list="borderTopunits" value="PX" />
                                    <datalist id="borderTopunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Border-Bottom</label>
                                    <input type="number" min="0" name="border-bottom" value={this.state["border-bottom"]} onChange={borderBottomChange.bind(this)}  />

                                    <input list="borderBottomunits" value="PX" />
                                    <datalist id="borderBottomunits">
                                        <option value="PX" />
                                        <option value="%" />
                                        <option value="EM" />
                                        <option value="VW" />
                                        <option value="VH" />
                                        <option value="Auto" />
                                    </datalist>
                                    <br />
                                    <label>Color</label>
                                    <input type="color" name="border-color" value={this.state["border-color"]} onChange={borderColorChange.bind(this)}   />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="option-group">
                        <p className="option-group-label">
                            <span className="title">Layout</span>
                            <span className="panel expanded"></span>
                        </p>
                        <div className="content">
                            <div className="option">
                                <label>Display</label>
                                <input list="display" name="display" value={this.state["display"]} onChange={displayChange.bind(this)}   />

                                <datalist id="display">
                                    <option value="inline" />
                                    <option value="block" />
                                    <option value="inline-block" />
                                    <option value="flex" />
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default CssBuilder;
