
function updateValue(e) {
    this.setState({
        value: e.target.value
    })
}


function reset() {
    this.setState({
        value: ""
    })
}


module.exports = {
    updateValue,
    reset
}