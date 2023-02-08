import { langEN } from './lang.en';
import { langES } from './lang.es';
import { langCN } from './lang.cn';
import { langFR } from './lang.fr';
import { langIT } from './lang.it';
import { langDE } from './lang.de';
import { langRU } from './lang.ru';


// Set state for selected language code
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
            break;
        case "it":
            this.setState({
                heading: langIT.heading,
                objective: langIT.objective,
                highestScore: langIT.highestScore,
                scorePrompt: langIT.score,
                bestScorePrompt: langIT.bestScore,
                computerScorePrompt: langIT.computerScore,
                selectSymbolLabelPrompt: langIT.selectSymbolLabelPrompt,
                selectSymbolPrompt: langIT.selectSymbolPrompt,
                questionPrompt: langIT.questionPrompt,
                yesPrompt: langIT.yesPrompt,
                noPrompt: langIT.noPrompt,
                generalPunctuation_1: langIT.generalPunctuation_1,
                generalPunctuation_2: langIT.generalPunctuation_2,
                currencySymbols: langIT.currencySymbols,
                arrows: langIT.arrows,
                mathematicalOperators: langIT.mathematicalOperators,
                boxDrawings: langIT.boxDrawings,
                blockElements: langIT.blockElements,
                geometricShapes: langIT.geometricShapes,
                miscellaneousSymbols: langIT.miscellaneousSymbols,
                dingbats: langIT.dingbats,
                emoji: langIT.emoji,
                emojiSmileys: langIT.emojiSmileys
            });
            break;
        case "de":
            this.setState({
                heading: langDE.heading,
                objective: langDE.objective,
                highestScore: langDE.highestScore,
                scorePrompt: langDE.score,
                bestScorePrompt: langDE.bestScore,
                computerScorePrompt: langDE.computerScore,
                selectSymbolLabelPrompt: langDE.selectSymbolLabelPrompt,
                selectSymbolPrompt: langDE.selectSymbolPrompt,
                questionPrompt: langDE.questionPrompt,
                yesPrompt: langDE.yesPrompt,
                noPrompt: langDE.noPrompt,
                generalPunctuation_1: langDE.generalPunctuation_1,
                generalPunctuation_2: langDE.generalPunctuation_2,
                currencySymbols: langDE.currencySymbols,
                arrows: langDE.arrows,
                mathematicalOperators: langDE.mathematicalOperators,
                boxDrawings: langDE.boxDrawings,
                blockElements: langDE.blockElements,
                geometricShapes: langDE.geometricShapes,
                miscellaneousSymbols: langDE.miscellaneousSymbols,
                dingbats: langDE.dingbats,
                emoji: langDE.emoji,
                emojiSmileys: langDE.emojiSmileys
            });
            break;
            case "ru":
            this.setState({
                heading: langRU.heading,
                objective: langRU.objective,
                highestScore: langRU.highestScore,
                scorePrompt: langRU.score,
                bestScorePrompt: langRU.bestScore,
                computerScorePrompt: langRU.computerScore,
                selectSymbolLabelPrompt: langRU.selectSymbolLabelPrompt,
                selectSymbolPrompt: langRU.selectSymbolPrompt,
                questionPrompt: langRU.questionPrompt,
                yesPrompt: langRU.yesPrompt,
                noPrompt: langRU.noPrompt,
                generalPunctuation_1: langRU.generalPunctuation_1,
                generalPunctuation_2: langRU.generalPunctuation_2,
                currencySymbols: langRU.currencySymbols,
                arrows: langRU.arrows,
                mathematicalOperators: langRU.mathematicalOperators,
                boxDrawings: langRU.boxDrawings,
                blockElements: langRU.blockElements,
                geometricShapes: langRU.geometricShapes,
                miscellaneousSymbols: langRU.miscellaneousSymbols,
                dingbats: langRU.dingbats,
                emoji: langRU.emoji,
                emojiSmileys: langRU.emojiSmileys
            });
            break;
        default:
            console.log(`Error invalid language code = ${event.target.selectedOptions[0].value}`)
    }
    console.log(`---End Function ${this.processLanguageSelection.name}---`);
}

export { processLanguageSelection }