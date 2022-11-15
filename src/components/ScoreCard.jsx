import { Component } from 'react';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="App-scoreboard mt-4 mb-5 pt-2 pb-2">
            <span>Score: {this.props.score}</span>
            <span>Best Score: {this.props.bestScore}</span>
            <span>Computer Score: {this.props.computerScore}</span>
            </div>);
    }
}
export default ScoreCard;