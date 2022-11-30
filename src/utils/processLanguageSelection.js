import { config } from './config';
import { langEN } from './lang.en';
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
        break;
      default:
        config.heading = "Error";

    }
    console.log(config.heading);
    console.log(`---End Function ${this.processLanguageSelection.name}---`);
  }

export { processLanguageSelection }