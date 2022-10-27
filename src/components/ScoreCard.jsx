import { Component } from 'react';

class ScoreCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="App-scoreboard">
            <span>Score:</span>
            <span>Best Score:</span>
            </div>);
    }
}
export default ScoreCard;