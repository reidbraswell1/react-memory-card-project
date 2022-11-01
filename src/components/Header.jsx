import { Component } from "react";
import ScoreCard from "./ScoreCard.jsx";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            bestScore: 0,
        }
    }
    render() {
        return (<div className="">
            <h1 className="">{this.props.Title}</h1>
            <p className="">Objective: Answer the questions to test your memory.
                <br></br>Highest score is 10!
            </p>
            <ScoreCard score={this.state.score} bestScore={this.state.bestScore}></ScoreCard>
        </div>)
    }
}
export default Header;