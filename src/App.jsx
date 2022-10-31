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
      randomSymbol: [],
    }
  }

  processSelection(event) {
    console.log(`---Begin Function ${this.processSelection.name}---`);
    console.log(`Event =`, event);
    console.log(event.target.selectedOptions[0]);

    let randomSymbols = [];
    if (event.target.selectedOptions.length > 1) {
      console.log(`Error`);
      return;
    }
    switch (event.target.selectedOptions[0].value) {
      case "generalPunctuation1":
        document.getElementById("span-symbol").innerHTML = "&#8209;"
        for (let i = 0; i < 7; i++) {
          randomSymbols.push(Math.floor(Math.random() * (this.state.generalPunctuationMax1 - this.state.generalPunctuationMin1) + this.state.generalPunctuationMin1));
        }
        document.getElementById("span-symbol").innerHTML = `&#${randomSymbols[0]};`;
        this.setState({randomSymbol:randomSymbols.slice(0)})
        console.log("random symbol",this.state.randomSymbol.length)
        console.log("Random Symbol", randomSymbols[0])
        break;
      case "generalPunctuation2":
        break;
    }
    console.log(`---End Function ${this.processSelection.name}---`);
  }

  processChoice(event) {
    console.log(`---Begin ${this.processChoice.name}---`);
    console.log("event2",event);
    let randomIndex = Math.floor(Math.random()*(7-1)+1);
    console.log("RandomIndex",randomIndex)
    document.getElementById("span-symbol").innerHTML=`&#${this.state.randomSymbol[randomIndex-1]};`
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
          <option value="currencySymbols">Currency Symbols {config.currencySymbolsMin1}-{config.currencySymbolsMax2}</option>
          <option value="arrows">Arrows {config.arrowsMin}-{config.arrowsMax}</option>
          <option value="mathematical-operators">Mathematical Operators {config.mathSymbolsMin}-{config.mathSymbolsMax}</option>
          <option value="box-drawings">Box Drawings {config.boxDrawingsMin}-{config.boxDrawingsMax}</option>
          <option value="block-elements">Block Elements {config.blockElementsMin}-{config.blockElementsMax}</option>
          <option value="geometric-shapes">Geometric Shapes {config.geometricShapesMin}-{config.geometricShapesMax}</option>
          <option value="miscelaneous-symbols">Miscellaneous Symbols {config.miscelaneousSymbolsMin}-{config.miscelaneousSymbolsMax}</option>
          <option value="dingbats">Dingbats {config.dingbatsMin}-{config.dingbatsMax}</option>
          <option value="emoji">Emoji</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <div>
        <span className="" id="span-symbol"></span>
        </div>
        <div>
        <span>{this.state.randomSymbol.toString()}</span>
        </div>
        <div>
        <button id="button-yes" name="button-choice" value="yes" onClick={this.processChoice}>Yes</button>
        <button id="button-no" name="button-choice" value="no" onClick={this.processChoice}>No</button>
        </div>
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
