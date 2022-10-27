import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<p className="text-center">{this.props.Text}</p>);
    }
}
export default Footer;