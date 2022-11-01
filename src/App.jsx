import './App.css';
import { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { config } from './utils/config.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.processSelection = this.processSelection.bind(this);
    this.processChoice = this.processChoice.bind(this);
    this.state = {
      randomSymbols: [],
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
          this.setState({ randomSymbols: symbols.slice(0) });
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
          document.getElementById("span-symbol").innerHTML = `&#${symbols[0]};`;
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
    let randomIndex = Math.floor(Math.random() * (config.maxSymbolSet - 1) + 1);
    console.log("RandomIndex", randomIndex)
    document.getElementById("span-symbol").innerHTML = `&#${this.state.randomSymbols[randomIndex - 1]};`
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Header Title="React Memory Game"></Header>
        </header>
        <label className="labels" for="symbol-select">Select Symbol</label>
        <select id="symbol-select" name="symbol" onChange={this.processSelection}>
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
          <option value=""></option>
          <option value=""></option>
        </select>
        <div>
          <span className="symbol" id="span-symbol"></span>
        </div>
        <span>{this.state.randomSymbols.toString()}</span>
        <div>
          <button id="button-yes" name="button-choice" value="yes" onClick={this.processChoice}>Yes</button>
          <button id="button-no" name="button-choice" value="no" onClick={this.processChoice}>No</button>
        </div>
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
