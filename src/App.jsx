import './App.css';
import { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { config } from './utils/config.js';
import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import { useRef } from 'react';
import { langEN } from './utils/lang.en.js';
import { processLanguageSelection } from './utils/processLanguageSelection.js';
import { processSelection } from './utils/processSelection.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.processLanguageSelection = processLanguageSelection.bind(this);
    this.processSelection = processSelection.bind(this);
    this.processChoice = this.processChoice.bind(this);

    this.state = {
      randomSymbols: [],
      displayedSymbols: [],
      currentSymbol: null,
      userScore: 0,
      bestScore: 0,
      computerScore: 0,
      heading: "",
      heading: langEN.heading,
      objective: langEN.objective,
      highestScore: langEN.highestScore,
      scorePrompt: langEN.score,
      bestScorePrompt: langEN.bestScore,
      computerScorePrompt: langEN.computerScore,
      selectSymbolLabelPrompt: langEN.selectSymbolLabelPrompt,
      selectSymbolPrompt: langEN.selectSymbolPrompt,
      questionPrompt: langEN.questionPrompt,
      yesPrompt: langEN.yesPrompt,
      noPrompt: langEN.noPrompt,
    }
  }


  processChoice(event) {
    console.log(`---Begin ${this.processChoice.name}---`);
    console.log("event2", event);
    const randomIndex = Math.floor(Math.random() * (config.maxSymbolSet - 1) + 1);
    console.log("RandomIndex", randomIndex);
    let userScore = this.state.userScore;
    let computerScore = this.state.computerScore;
    let bestScore = this.state.bestScore;
    const currentSymbol = this.state.currentSymbol;
    let displayedSymbolsNew = this.state.displayedSymbols;
    const randomSymbols = this.state.randomSymbols;
    // Randomly select the next symbol to display from the display pool
    const newCurrentSymbol = randomSymbols[randomIndex - 1];
    switch (event.target.value) {
      case "yes":
        {
          document.getElementById("span-symbol").innerHTML = `&#${newCurrentSymbol};`;
          document.getElementById("debug-symbol").innerHTML = `&#${newCurrentSymbol};`;
          // Add the newly selected symbol to the list of displayed symbols
          displayedSymbolsNew.push(newCurrentSymbol);
          // Update the displayed symbols to include the newly selected symbol
          this.setState({ displayedSymbols: displayedSymbolsNew });
          const firstIndex = displayedSymbolsNew.sort().indexOf(currentSymbol);
          const lastIndex = displayedSymbolsNew.sort().lastIndexOf(currentSymbol);
          if (lastIndex > firstIndex) {
            this.setState({ userScore: ++userScore });
            if (userScore > bestScore) {
              this.state.setState({ bestScore: userScore });
            }
            console.log(`Score user =`, userScore);
          }
          else {
            this.setState({ computerScore: ++computerScore });
            if (userScore > bestScore) {
              this.state.setState({ bestScore: userScore });
            }
            this.setState({ userScore: 0 });
            console.log(`Score computer =`, computerScore);
          }
          this.setState({ currentSymbol: newCurrentSymbol });
        }
        break;
      case "no":
        {
          document.getElementById("span-symbol").innerHTML = `&#${newCurrentSymbol};`
          document.getElementById("debug-symbol").innerHTML = `&#${newCurrentSymbol};`;
          // Add the newly selected symbol to the list of displayed symbols
          displayedSymbolsNew.push(newCurrentSymbol);
          // Update the displayed symbols to include the newly selected symbol
          this.setState({ displayedSymbols: displayedSymbolsNew });
          const firstIndex = displayedSymbolsNew.sort().indexOf(currentSymbol);
          const lastIndex = displayedSymbolsNew.sort().lastIndexOf(currentSymbol);
          if (lastIndex > firstIndex) {
            this.setState({ computerScore: ++computerScore });
            if (userScore > bestScore) {
              this.state.setState({ bestScore: userScore });
            }
            this.setState({ userScore: 0 });
            console.log(`Score computer =`, computerScore);
          }
          else {
            this.setState({ userScore: ++userScore });
            console.log(`Score user =`, userScore);
            if (userScore > bestScore) {
              this.setState({ bestScore: userScore });
            }
          }
          this.setState({ currentSymbol: newCurrentSymbol });
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Header heading={this.state.heading} objective={this.state.objective} highestScorePrompt={this.state.highestScore} scorePrompt={this.state.scorePrompt} score={this.state.userScore} bestScorePrompt={this.state.bestScorePrompt} bestScore={this.state.bestScore} computerScorePrompt={this.state.computerScorePrompt} computerScore={this.state.computerScore} highestScore={config.maxSymbolSet} processLanguageSelection={this.processLanguageSelection}></Header>
        </header>
        <label className="labels" htmlFor="symbol-select">{this.state.selectSymbolLabelPrompt}</label>
        <select className="App-select pt-2 pb-2" id="symbol-select" name="symbol" onChange={this.processSelection}>
          <option value="select">{this.state.selectSymbolPrompt}</option>
          <option value="generalPunctuation1">General Punctuation 1 {config.generalPunctuationMin1}-{config.generalPunctuationMax1}</option>
          <option value="generalPunctuation2">General Punctuation 2 {config.generalPunctuationMin2}-{config.generalPunctuationMax2}</option>
          <option value="currencySymbols">Currency Symbols {config.currencySymbolsMin}-{config.currencySymbolsMax}</option>
          <option value="arrows">Arrows {config.arrowsMin}-{config.arrowsMax}</option>
          <option value="mathematical-operators">Mathematical Operators {config.mathSymbolsMin}-{config.mathSymbolsMax}</option>
          <option value="box-drawings">Box Drawings {config.boxDrawingsMin}-{config.boxDrawingsMax}</option>
          <option value="block-elements">Block Elements {config.geometricShapesMin}-{config.geometricShapesMax}</option>
          <option value="geometric-shapes">Geometric Shapes {config.geometricShapesMin}-{config.geometricShapesMax}</option>
          <option value="miscelaneous-symbols">Miscellaneous Symbols {config.miscelaneousSymbolsMin}-{config.miscelaneousSymbolsMax}</option>
          <option value="dingbats">Dingbats {config.dingbatsMin}-{config.dingbatsMax}</option>
          <option value="emoji">Emoji</option>
          <option value="emoji-smileys">Emoji Smileys</option>
        </select>
        <div id="app-item-container" className="App-item-container">
          <div className="symbol">
            <span id="span-symbol"></span>
          </div>
          <div className="App-button-container">
            <h3>{this.state.questionPrompt}</h3>
            <button className="btn" id="button-yes" name="button-choice" value="yes" onClick={this.processChoice}>{this.state.yesPrompt}</button>
            <button className="btn" id="button-no" name="button-choice" value="no" onClick={this.processChoice}>{this.state.noPrompt}</button>
          </div>
        </div>
        {config.debug &&
          <div className="debugging">
            <h5>Degugging:</h5>
            <span>{`Current Symbol = ${this.state.currentSymbol} (`}<span id="debug-symbol"></span>)</span>
            <br></br>
            <span>{`Displayed Symbols = ${this.state.displayedSymbols.toString()}`}</span>
            <br></br>
            <span>{`Random Symbols = ${this.state.randomSymbols.toString()}`}</span>
            <br></br>
            <span>User Score: {this.state.userScore} Best Score: {this.state.bestScore} Computer Score: {this.state.computerScore}</span>
            <br></br>
            <span>Heading: {config.heading}</span>
          </div>
        }
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
