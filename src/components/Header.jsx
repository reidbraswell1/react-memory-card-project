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
            <h2 id="symbol" style={{ fontSize: "7rem" }}></h2>
            <button onClick={(event) => {
                let htmlSymbol = Math.floor(Math.random() * (8959 - 8704) + 8704);
                document.getElementById("symbol").innerHTML = `&#${htmlSymbol}; (${htmlSymbol})`
            }}>Click Me</button>
            <button onClick={() => { this.setState({ score: this.state.score+=32 }); this.setState({bestScore: this.state.bestScore+=5}) }}>Click Score</button>
            <ScoreCard score={this.state.score} bestScore={this.state.bestScore}></ScoreCard>
        </div>)
    }
}
export default Header;