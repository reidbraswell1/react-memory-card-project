import './App.css';
import { Component} from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


class App extends Component {
  render() {
    return (
      <main className="App">
        <Header className="App-header" Title="React Memory Game"></Header>
        <Footer Footer="React Memory Card Project 11/22"></Footer>
      </main>);
  }
}
export default App;
