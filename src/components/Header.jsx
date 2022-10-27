import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="App-header">
            <h1 className="text-white text-center">{this.props.Title}</h1>
            <p className="text-white text-center">Objective: Answer the questions to test your memory.<br></br>
                Highest score is 10!</p>
        </div>)
    }
}
export default Header;