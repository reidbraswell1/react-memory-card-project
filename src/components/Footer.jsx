import { Component } from "react";

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<footer className="text-center border">
            <p>{this.props.Footer}</p>
        </footer>);
    }
}
export default Footer;