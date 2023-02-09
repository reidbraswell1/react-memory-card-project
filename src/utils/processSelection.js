import { config } from './config.js';

const processSelection = function(event)  {
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.generalPunctuationMax1 - config.generalPunctuationMin1) + config.generalPunctuationMin1));
                }
                let data = this.state.displayedSymbols;
                data.push(symbols[0]);
                this.setState({ displayedSymbols: data })
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.generalPunctuationMax2 - config.generalPunctuationMin2) + config.generalPunctuationMin2));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.currencySymbolsMax - config.currencySymbolsMin) + config.currencySymbolsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.arrowsMax - config.arrowsMin) + config.arrowsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.mathSymbolsMax - config.mathSymbolsMin) + config.mathSymbolsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.boxDrawingsMax - config.boxDrawingsMin) + config.boxDrawingsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.blockElementsMax - config.blockElementsMin) + config.blockElementsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.miscelaneousSymbolsMax - config.miscelaneousSymbolsMin) + config.geometricShapesMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.geometricShapesMax - config.geometricShapesMin) + config.geometricShapesMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    symbols.push(Math.floor(Math.random() * (config.dingbatsMax - config.dingbatsMin) + config.dingbatsMin));
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    let randomIdx = Math.floor(Math.random() * (config.emoji.length - 1) + 1);
                    symbols.push(config.emoji[randomIdx]);
                }
                document.getElementById("app-item-container").style.display = "flex";
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
                for (let i = 0; i < config.maxSymbols; i++) {
                    let randomIdx = Math.floor(Math.random() * (config.emojiSmileys.length - 1) + 1);
                    symbols.push(config.emojiSmileys[randomIdx]);
                }
                document.getElementById("app-item-container").style.display = "flex";
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
export { processSelection }