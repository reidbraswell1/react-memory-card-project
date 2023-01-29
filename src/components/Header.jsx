import { Component } from "react";
import ScoreCard from "./ScoreCard.jsx";
import LanguageSelector from "./LanguageSelector.jsx";
import { config } from "../utils/config.js";
import { langCN } from "../utils/lang.cn.js";
import { langEN } from "../utils/lang.en.js";

// Header for app
class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div className="">
            
            <div className="App-language-container">
                <label>Language: </label>
                <LanguageSelector processLanguageSelection={this.props.processLanguageSelection}></LanguageSelector>
            </div>
            <h1 className="mt-4 mb-4">{this.props.heading}</h1>
            <p className="mt-4 mb-4">{this.props.objective}
                <br></br>{this.props.highestScorePrompt} {this.props.highestScore}!
            </p>
            <ScoreCard scorePrompt={this.props.scorePrompt} score={this.props.score} bestScorePrompt={this.props.bestScorePrompt} bestScore={this.props.bestScore} computerScorePrompt={this.props.computerScorePrompt} computerScore={this.props.computerScore}></ScoreCard>
        </div>)
    }
}
export default Header;