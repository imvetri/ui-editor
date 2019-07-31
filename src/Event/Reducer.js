
  function  updateEventName(e) {
        this.setState({
            name: e.target.value
        })
    }

  function  updateReducer(e) {
        this.setState({
            reducer: e.target.value
        })
    }

 function   updatePublishName(e) {
        this.setState({
            publishName: e.target.value
        })
    }

  function  updateEventType(e){
        this.setState({
            publishable: e.currentTarget.checked
        })
    }

    module.exports = {
        updateEventName,
        updateEventType,
        updatePublishName,
        updateEventType
    }