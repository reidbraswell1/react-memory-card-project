import './App.css';
import { Component} from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const generalPunctuationMin1 = 8208;
    const generalPunctuationMax1 = 8231;
    const generalPunctuationMin2 = 8240;
    const generalPunctuationMax2 = 8286;
    const currencySymbolsMin1 = 8352;
    const currencySymbolsMax2 = 8399;
    const arrowsMin = 8592;
    const arrowsMax = 8703;

    return (
      <main className="App">
        <Header className="App-header" Title="React Memory Game"></Header>
        <label className="labels" for="symbol-select">Select Symbol</label>
        <select id="symbol-select" name="symbol">
          <option value="generalPunctuation1">UTF-8 General Punctuation Decimal {generalPunctuationMin1}-{generalPunctuationMax1}</option>
          <option value="generalPunctuation2">UTF-8 General Punctuation Decimal {generalPunctuationMin2}-{generalPunctuationMax2}</option>
          <option value="currencySymbols">UTF-8 Currency Symbols Decimal {currencySymbolsMin1}-{currencySymbolsMax2}</option>
          <option value="arrows">UTF-8 Arrows {arrowsMin}-{arrowsMax}</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
