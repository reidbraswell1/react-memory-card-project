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
            this.setState({
                heading: langCN.heading,
                objective: langCN.objective,
                highestScore: langCN.highestScore,
                scorePrompt: langCN.score,
                bestScorePrompt: langCN.bestScore,
                computerScorePrompt: langCN.computerScore,
                selectSymbolLabelPrompt: langCN.selectSymbolLabelPrompt,
                selectSymbolPrompt: langCN.selectSymbolPrompt,
                questionPrompt: langCN.questionPrompt,
                yesPrompt: langCN.yesPrompt,
                noPrompt: langCN.noPrompt,
                generalPunctuation_1: langCN.generalPunctuation_1,
                generalPunctuation_2: langCN.generalPunctuation_2,
            });
            break;
        case "en":
            this.setState({
                heading: langEN.heading,
                objective: langEN.objective,
                highestScore: langEN.highestScore,
                scorePrompt: langEN.score,
                bestScorePrompt: langEN.bestScore,
                computerScorePrompt: langEN.computerScore,
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
                emojiSmileys: langEN.emojiSmileys
            });
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