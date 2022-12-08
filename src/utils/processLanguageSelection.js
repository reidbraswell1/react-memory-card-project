import { config } from './config';
import { langEN } from './lang.en';
import { langES } from './lang.es';
import { langCN } from './lang.cn';
import { langFR } from './lang.fr';


const processLanguageSelection = function (event) {
    console.log(`---Begin Function ${this.processLanguageSelection.name}---`);
    console.log(`Event =`, event);
    console.log(`Selected Options =`, event.target.selectedOptions);
    switch (event.target.selectedOptions[0].value) {
        case "zh":
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
                currencySymbols: langCN.currencySymbols,
                arrows: langCN.arrows,
                mathematicalOperators: langCN.mathematicalOperators,
                boxDrawings: langCN.boxDrawings,
                blockElements: langCN.blockElements,
                geometricShapes: langCN.geometricShapes,
                miscellaneousSymbols: langCN.miscellaneousSymbols,
                dingbats: langCN.dingbats,
                emoji: langCN.emoji,
                emojiSmileys: langCN.emojiSmileys
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
                selectSymbolLabelPrompt: langEN.selectSymbolLabelPrompt,
                selectSymbolPrompt: langEN.selectSymbolPrompt,
                questionPrompt: langEN.questionPrompt,
                yesPrompt: langEN.yesPrompt,
                noPrompt: langEN.noPrompt,
                generalPunctuation_1: langEN.generalPunctuation_1,
                generalPunctuation_2: langEN.generalPunctuation_2,
                currencySymbols: langEN.currencySymbols,
                arrows: langEN.arrows,
                mathematicalOperators: langEN.mathematicalOperators,
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
            this.setState({
                heading: langES.heading,
                objective: langES.objective,
                highestScore: langES.highestScore,
                scorePrompt: langES.score,
                bestScorePrompt: langES.bestScore,
                computerScorePrompt: langES.computerScore,
                selectSymbolLabelPrompt: langES.selectSymbolLabelPrompt,
                selectSymbolPrompt: langES.selectSymbolPrompt,
                questionPrompt: langES.questionPrompt,
                yesPrompt: langES.yesPrompt,
                noPrompt: langES.noPrompt,
                generalPunctuation_1: langES.generalPunctuation_1,
                generalPunctuation_2: langES.generalPunctuation_2,
                currencySymbols: langES.currencySymbols,
                arrows: langES.arrows,
                mathematicalOperators: langES.mathematicalOperators,
                boxDrawings: langES.boxDrawings,
                blockElements: langES.blockElements,
                geometricShapes: langES.geometricShapes,
                miscellaneousSymbols: langES.miscellaneousSymbols,
                dingbats: langES.dingbats,
                emoji: langES.emoji,
                emojiSmileys: langES.emojiSmileys
            });
            break;
            case "fr":
            this.setState({
                heading: langFR.heading,
                objective: langFR.objective,
                highestScore: langFR.highestScore,
                scorePrompt: langFR.score,
                bestScorePrompt: langFR.bestScore,
                computerScorePrompt: langFR.computerScore,
                selectSymbolLabelPrompt: langFR.selectSymbolLabelPrompt,
                selectSymbolPrompt: langFR.selectSymbolPrompt,
                questionPrompt: langFR.questionPrompt,
                yesPrompt: langFR.yesPrompt,
                noPrompt: langFR.noPrompt,
                generalPunctuation_1: langFR.generalPunctuation_1,
                generalPunctuation_2: langFR.generalPunctuation_2,
                currencySymbols: langFR.currencySymbols,
                arrows: langFR.arrows,
                mathematicalOperators: langFR.mathematicalOperators,
                boxDrawings: langFR.boxDrawings,
                blockElements: langFR.blockElements,
                geometricShapes: langFR.geometricShapes,
                miscellaneousSymbols: langFR.miscellaneousSymbols,
                dingbats: langFR.dingbats,
                emoji: langFR.emoji,
                emojiSmileys: langFR.emojiSmileys
            });
        default:
            config.heading = "Error";
    }
    console.log(config.heading);
    console.log(`---End Function ${this.processLanguageSelection.name}---`);
}

export { processLanguageSelection }