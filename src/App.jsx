import './App.css';
import { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { config } from './utils/config.js';
import { toHaveClass } from '@testing-library/jest-dom/dist/matchers';
import { useRef } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.processSelection = this.processSelection.bind(this);
    this.processChoice = this.processChoice.bind(this);
    this.state = {
      randomSymbols: [],
      displayedSymbols: [],
      currentSymbol: null,
      userScore: 0,
      bestScore: 0,
      computerScore: 0,

    }
  }

  processSelection(event) {
    console.log(`---Begin Function ${this.processSelection.name}---`);
    console.log(`Event =`, event);
    console.log(`Selected Options =`, event.target.selectedOptions);

    let symbols = [];
    if (event.target.selectedOptions.length > 1) {
      console.log(`Error`);
      return;
    }
    switch (event.target.selectedOptions[0].value) {
      case "generalPunctuation1":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.generalPunctuationMax1 - config.generalPunctuationMin1) + config.generalPunctuationMin1));
          }
          let data = this.state.displayedSymbols;
          data.push(symbols[0]);
          this.setState({ displayedSymbols: data })
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
          this.setState({ currentSymbol: symbols[0] });
          //document.getElementById("app-item-container").style.display="flex";
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "generalPunctuation2":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.generalPunctuationMax2 - config.generalPunctuationMin2) + config.generalPunctuationMin2));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "currencySymbols":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.currencySymbolsMax - config.currencySymbolsMin) + config.currencySymbolsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "arrows":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.arrowsMax - config.arrowsMin) + config.arrowsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "mathematical-operators":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.mathSymbolsMax - config.mathSymbolsMin) + config.mathSymbolsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "box-drawings":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.boxDrawingsMax - config.boxDrawingsMin) + config.boxDrawingsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "block-elements":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.blockElementsMax - config.blockElementsMin) + config.blockElementsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "miscelaneous-symbols":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.miscelaneousSymbolsMax - config.miscelaneousSymbolsMin) + config.geometricShapesMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "geometric-shapes":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.geometricShapesMax - config.geometricShapesMin) + config.geometricShapesMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "dingbats":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            symbols.push(Math.floor(Math.random() * (config.dingbatsMax - config.dingbatsMin) + config.dingbatsMin));
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "emoji":
        try {
          let emojis = config.emoji.length;
          for (let i = 0; i < config.maxSymbolSet; i++) {
            let randomIdx = Math.floor(Math.random() * (config.emoji.length - 1) + 1);
            symbols.push(config.emoji[randomIdx]);
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      case "emoji-smileys":
        try {
          for (let i = 0; i < config.maxSymbolSet; i++) {
            let randomIdx = Math.floor(Math.random() * (config.emojiSmileys.length - 1) + 1);
            symbols.push(config.emojiSmileys[randomIdx]);
          }
          document.getElementById("app-item-container").style.display="flex";
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          document.getElementById("debug-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
        }
        catch (err) {
          console.log(`Error Has Occurred =`, err);
        }
        break;
      default:
        break;
    }
    console.log(`---End Function ${this.processSelection.name}---`);
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
          <Header Title="React Memory Game" score={this.state.userScore} bestScore={this.state.bestScore} highestScore={config.maxSymbolSet}></Header>
        </header>
        <label className="labels" for="symbol-select">Select Symbol</label>
        <select className="App-select pt-2 pb-2" id="symbol-select" name="symbol" onChange={this.processSelection}>
          <option value="select">Select an HTML symbol</option>
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
            <h3>Have you seen this symbol yet?</h3>
            <button className="btn" id="button-yes" name="button-choice" value="yes" onClick={this.processChoice}>Yes</button>
            <button className="btn" id="button-no" name="button-choice" value="no" onClick={this.processChoice}>No</button>
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
          </div>
        }
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
