import { Component } from 'react';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="App-scoreboard">
            <span>Score: {this.props.score}</span>
            <span>Best Score: {this.props.bestScore}</span>
            </div>);
    }
}
export default ScoreCard;