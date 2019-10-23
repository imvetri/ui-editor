export function colorChange(event){
    let value = event.currentTarget.value;
    this.setState({color:value},()=> this.props.onChange(this.state, {color:value}))
    
}

export function backgroundColorChange(event){
    let value = event.currentTarget.value;

    this.setState({'background-color':value},()=> this.props.onChange(this.state, {'background-color':value}))

}

export function fontSizeChange(event){
    let value = event.currentTarget.value;

    this.setState({'font-size':value},()=> this.props.onChange(this.state, {'font-size':value}))

}

export function fontFamilyChange(event){
    let value = event.currentTarget.value;

    this.setState({'font-family':value},()=> this.props.onChange(this.state,{'font-family':value}))

}

export function fontStyleChange(event){
    let value = event.currentTarget.value;

    this.setState({'font-style':value},()=> this.props.onChange(this.state,{'font-style':value}))

}

export function fontWeightChange(event){
    let value = event.currentTarget.value;

    this.setState({'font-weight':value},()=> this.props.onChange(this.state,{'font-weight':value}))

}

export function textTransformChange(event){
    let value = event.currentTarget.value;

    this.setState({'text-transform':value},()=> this.props.onChange(this.state,{'text-transform':value}))

}

export function textDecorationChange(event){
    let value = event.currentTarget.value;

    this.setState({'text-decoration':value},()=> this.props.onChange(this.state,{'text-decoration':value}))

}

export function textAlignChange(event){
    let value = event.currentTarget.value;

    this.setState({'text-align':value},()=> this.props.onChange(this.state,{'text-align':value}))

}

export function letterSpacingChange(event){
    let value = event.currentTarget.value;

    this.setState({'letter-spacing':value},()=> this.props.onChange(this.state,{'letter-spacing':value}))

}

export function wordSpacingChange(event){
    let value = event.currentTarget.value;

    this.setState({'word-spacing':value},()=> this.props.onChange(this.state,{'word-spacing':value}))

}

export function widthChange(event){
    let value = event.currentTarget.value;

    this.setState({width:value},()=> this.props.onChange(this.state,{width:value}))
}

export function heightChange(event){
    let value = event.currentTarget.value;

    this.setState({height:value},()=> this.props.onChange(this.state,{height:value}))
}

export function marginLeftChange(event){
    let value = event.currentTarget.value;

    this.setState({'margin-left':value},()=> this.props.onChange(this.state,{'margin-left':value}))
}

export function marginRightChange(event){
    let value = event.currentTarget.value;

    this.setState({'margin-right':value},()=> this.props.onChange(this.state,{'margin-right':value}))
}


export function marginBottomChange(event){
    let value = event.currentTarget.value;

    this.setState({'margin-bottom':value},()=> this.props.onChange(this.state,{'margin-bottom':value}))
}


export function marginTopChange(event){
    let value = event.currentTarget.value;

    this.setState({'margin-top':value},()=> this.props.onChange(this.state,{'margin-top':value}))
}

export function paddingLeftChange(event){
    let value = event.currentTarget.value;

    this.setState({'padding-left':value},()=> this.props.onChange(this.state,{'padding-left':value}))
}

export function paddingRightChange(event){
    let value = event.currentTarget.value;

    this.setState({'padding-right':value},()=> this.props.onChange(this.state,{'padding-right':value}))
}


export function paddingBottomChange(event){
    let value = event.currentTarget.value;

    this.setState({'padding-bottom':value},()=> this.props.onChange(this.state,{'padding-bottom':value}))
}


export function paddingTopChange(event){
    let value = event.currentTarget.value;

    this.setState({'padding-top':value},()=> this.props.onChange(this.state,{'padding-top':value}))
}


export function borderLeftChange(event){
    let value = event.currentTarget.value;

    this.setState({'border-left':value},()=> this.props.onChange(this.state,{'border-left':value}))
}

export function borderRightChange(event){
    let value = event.currentTarget.value;

    this.setState({'border-right':value},()=> this.props.onChange(this.state,{'border-right':value}))
}


export function borderBottomChange(event){
    let value = event.currentTarget.value;

    this.setState({'border-bottom':value},()=> this.props.onChange(this.state,{'border-bottom':value}))
}


export function borderTopChange(event){
    let value = event.currentTarget.value;

    this.setState({'border-top':value},()=> this.props.onChange(this.state,{'border-top':value}))
}

export function borderColorChange(event){
    let value = event.currentTarget.value;

    this.setState({'border-color':value},()=> this.props.onChange(this.state,{'border-color':value}))
}

export function displayChange(event){
    let value = event.currentTarget.value;

    this.setState({'display':value},()=> this.props.onChange(this.state,{'display':value}))
}
