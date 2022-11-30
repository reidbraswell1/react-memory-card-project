import { Component } from 'react';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="App-scoreboard mt-4 mb-5 pt-2 pb-2">
            <span>{this.props.scorePrompt} {this.props.score}</span>
            <span>{this.props.bestScorePrompt} {this.props.bestScore}</span>
            <span>{this.props.computerScorePrompt} {this.props.computerScore}</span>
            </div>);
    }
}
export default ScoreCard;