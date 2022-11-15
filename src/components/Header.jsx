import { Component } from "react";
import ScoreCard from "./ScoreCard.jsx";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="">
            <h1 className="mt-3 mb-3">{this.props.Title}</h1>
            <p className="mt-3 mb-3">Objective: Answer the questions to test your memory.
                <br></br>Highest score is {this.props.highestScore}!
            </p>
            <ScoreCard score={this.props.score} bestScore={this.props.bestScore} computerScore={this.props.computerScore}></ScoreCard>
        </div>)
    }
}
export default Header;