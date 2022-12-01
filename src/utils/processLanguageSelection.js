import { config } from './config';
import { langEN } from './lang.en';
import { langES } from './lang.es';
import { langCN } from './lang.cn';

const processLanguageSelection = function (event) {
    console.log(`---Begin Function ${this.processLanguageSelection.name}---`);
    console.log(`Event =`, event);
    console.log(`Selected Options =`, event.target.selectedOptions);
    switch (event.target.selectedOptions[0].value) {
        case "zh":
            config.heading = langCN.heading;
            this.setState({ heading: langCN.heading });
            this.setState({ objective: langCN.objective });
            this.setState({ highestScore: langCN.highestScore });
            this.setState({ scorePrompt: langCN.score, });
            this.setState({ bestScorePrompt: langCN.bestScore });
            this.setState({ computerScorePrompt: langCN.computerScore });
            break;
        case "en":
            this.setState({ heading: langEN.heading });
            this.setState({ objective: langEN.objective });
            this.setState({ highestScore: langEN.highestScore });
            this.setState({ scorePrompt: langEN.score, });
            this.setState({ bestScorePrompt: langEN.bestScore });
            this.setState({ computerScorePrompt: langEN.computerScore });
            this.setState({ selectSymbolPrompt: langEN.selectSymbolPrompt });
            this.setState({ questionPrompt: langEN.questionPrompt });
            this.setState({ yesPrompt: langEN.yesPrompt });
            this.setState({ noPrompt: langEN.noPrompt });
            break;
        case "es":
            this.setState({ heading: langES.heading });
            this.setState({ objective: langES.objective });
            this.setState({ highestScore: langES.highestScore });
            this.setState({ scorePrompt: langES.score, });
            this.setState({ bestScorePrompt: langES.bestScore });
            this.setState({ computerScorePrompt: langES.computerScore });
            this.setState({ selectSymbolLabelPrompt: langES.selectSymbolLabelPrompt });
            this.setState({ selectSymbolPrompt: langES.selectSymbolPrompt });
            this.setState({ questionPrompt: langES.questionPrompt });
            this.setState({ yesPrompt: langES.yesPrompt });
            this.setState({ noPrompt: langES.noPrompt });
            break;
        default:
            config.heading = "Error";

    }
    console.log(config.heading);
    console.log(`---End Function ${this.processLanguageSelection.name}---`);
}

export { processLanguageSelection }