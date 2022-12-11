import { Component } from "react";
import { processDebugToggle } from '../utils/miscFunctions.js';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<footer className="App-footer">
            <p>{this.props.Footer}</p>
            <div className="app-debug-container">
                <label htmlFor="debug">Debug: </label>
                <input id="debug" type="checkbox" onClick={this.props.debugToggle}></input>
            </div>
     </footer>);
    }
}
export default Footer;