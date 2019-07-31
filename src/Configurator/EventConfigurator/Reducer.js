function updateReducer(e) {
    this.setState({
        reducer: e.target.value
    })
}

function reset(){
    this.setState({
        reducer: ""
    })
}

module.exports ={
    updateReducer, reset
}