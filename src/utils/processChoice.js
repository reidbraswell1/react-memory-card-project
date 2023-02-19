import { config } from './config.js';

// Return a random RGBA color
const getRandomRGBA = function (maxRBB_Int = 255, opacity = .5) {
    let red = Math.floor(Math.random() * maxRBB_Int + 1);
    let blue = Math.floor(Math.random() * maxRBB_Int + 1);
    let green = Math.floor(Math.random() * maxRBB_Int + 1);
    return `RGBA(${red},${blue},${green},${opacity})`
}


// Process the users yes / no choice and display the next random symbol
const processChoice = function (event) {
    console.log(`---Begin ${this.processChoice.name}---`);
    console.log(`Event =`, event);
    // Get a random number between 1 and the max symbols to display 
    const randomIndex = Math.floor(Math.random() * (config.maxSymbols - 1) + 1);
    console.log(`RandomIndex =`, randomIndex);
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
                    // If the user score exceeds max score reset userScore to 0 and computerScore to 0
                    if (userScore >= config.maxScore) {
                        this.setState({ userScore: 0 });
                        this.setState({ computerScore: 0 });
                    }
                    else {
                        this.setState({ userScore: ++userScore });
                        if (userScore > bestScore) {
                            this.setState({ bestScore: userScore });
                        }
                    }
                    console.log(`Score user =`, userScore);
                }
                // User guessed incorrectly
                else {
                    if (computerScore > config.maxScore) {
                        this.setState({ computerScore: 0 })
                    }
                    else {
                        this.setState({ computerScore: ++computerScore });
                        if (userScore > bestScore) {
                            this.state.setState({ bestScore: userScore });
                        }
                        this.setState({ userScore: 0 });
                    }
                    console.log(`Score computer =`, computerScore);
                }
                this.setState({ currentSymbol: newCurrentSymbol });
                let RGBA = getRandomRGBA();
                document.getElementById("app-body").style.background = RGBA;
                this.setState({ background: RGBA });
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
                    console.log("config.maxScore", config.maxScore);
                    if (computerScore >= config.maxScore) {
                        this.setState({ computerScore: 0 });
                    }
                    else {
                        this.setState({ computerScore: ++computerScore });
                        if (userScore > bestScore) {
                            this.state.setState({ bestScore: userScore });
                        }
                        this.setState({ userScore: 0 });
                    }
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
            let RGBA = getRandomRGBA();
            document.getElementById("app-body").style.background = RGBA;
            this.setState({ background: RGBA });
            break;
        default:
            break;
    }
}
export { processChoice }