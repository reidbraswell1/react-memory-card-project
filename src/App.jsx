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
import { processChoice } from './utils/processChoice.js';
import { processDebugToggle } from './utils/miscFunctions.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.processLanguageSelection = processLanguageSelection.bind(this);
    this.processSelection = processSelection.bind(this);
    this.processChoice = processChoice.bind(this);
    this.processDebugToggle = processDebugToggle.bind(this);

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
      generalPunctuation_1: langEN.generalPunctuation_1,
      generalPunctuation_2: langEN.generalPunctuation_2,
      currencySymbols: langEN.currencySymbols,
      arrows: langEN.arrows,
      mathematicalOperators: langEN.mathematicaloperators,
      boxDrawings: langEN.boxDrawings,
      blockElements: langEN.blockElements,
      geometricShapes: langEN.geometricShapes,
      miscellaneousSymbols: langEN.miscellaneousSymbols,
      dingbats: langEN.dingbats,
      emoji: langEN.emoji,
      emojiSmileys: langEN.emojiSmileys,
      background: "",
      debug: false
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Header heading={this.state.heading} objective={this.state.objective} highestScorePrompt={this.state.highestScore} scorePrompt={this.state.scorePrompt} score={this.state.userScore} bestScorePrompt={this.state.bestScorePrompt} bestScore={this.state.bestScore} computerScorePrompt={this.state.computerScorePrompt} computerScore={this.state.computerScore} highestScore={config.maxSymbols} processLanguageSelection={this.processLanguageSelection}></Header>
        </header>
        <div id="app-body" className="App-body">
          <label className="labels" htmlFor="symbol-select">{this.state.selectSymbolLabelPrompt}</label>
          <select className="App-select pt-2 pb-2" id="symbol-select" name="symbol" onChange={this.processSelection}>
            <option value="select">{this.state.selectSymbolPrompt}</option>
            <option value="generalPunctuation1">{this.state.generalPunctuation_1} {config.generalPunctuationMin1}-{config.generalPunctuationMax1}</option>
            <option value="generalPunctuation2">{this.state.generalPunctuation_2} {config.generalPunctuationMin2}-{config.generalPunctuationMax2}</option>
            <option value="currencySymbols">{this.state.currencySymbols} {config.currencySymbolsMin}-{config.currencySymbolsMax}</option>
            <option value="arrows">{this.state.arrows} {config.arrowsMin}-{config.arrowsMax}</option>
            <option value="mathematical-operators">{this.state.mathematicalOperators} {config.mathSymbolsMin}-{config.mathSymbolsMax}</option>
            <option value="box-drawings">{this.state.boxDrawings} {config.boxDrawingsMin}-{config.boxDrawingsMax}</option>
            <option value="block-elements">{this.state.blockElements} {config.geometricShapesMin}-{config.geometricShapesMax}</option>
            <option value="geometric-shapes">{this.state.geometricShapes} {config.geometricShapesMin}-{config.geometricShapesMax}</option>
            <option value="miscelaneous-symbols">{this.state.miscellaneousSymbols} {config.miscelaneousSymbolsMin}-{config.miscelaneousSymbolsMax}</option>
            <option value="dingbats">{this.state.dingbats} {config.dingbatsMin}-{config.dingbatsMax}</option>
            <option value="emoji">{this.state.emoji}</option>
            <option value="emoji-smileys">{this.state.emojiSmileys}</option>
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
        </div>
          <div id="app-debugging" className="app-debugging">
            <h5>Degugging:</h5>
            <span>{`Current Symbol = ${this.state.currentSymbol} (`}<span id="debug-symbol"></span>)</span>
            <br></br>
            <span>{`Displayed Symbols = ${this.state.displayedSymbols.toString()}`}</span>
            <br></br>
            <span>{`Random Symbols = ${this.state.randomSymbols.toString()}`}</span>
            <br></br>
            <span>User Score: {this.state.userScore} Best Score: {this.state.bestScore} Computer Score: {this.state.computerScore}</span>
            <br></br>
            <span>Background: {this.state.background}</span>
            <br></br>
            <span>Debug: {this.state.debug.toString()}</span>
          </div>
        <Footer Footer="React Memory Card Project 11/22" debugToggle={this.processDebugToggle}></Footer>
      </main>);
  }
}
export default App;
