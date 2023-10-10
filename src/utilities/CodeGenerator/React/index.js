export function convertToReact (component){

    let ReactComponent = 
`(
class ${component.name} extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state || ${component.state};

    }


    render() {
        return ('lalala')
    }
})
`
    return ReactComponent;
}
