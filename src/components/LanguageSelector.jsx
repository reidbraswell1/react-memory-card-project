import { Component } from "react";
import { config } from '../utils/config.js';
import { langCN } from '../utils/lang.cn';
import App from '../App.jsx';

class LanguageSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select className="" defaultValue="en" onChange={this.props.processLanguageSelection}>
                <option className="" value="zh" lang="zh">
                    简体字 (Chinese - Simplified)
                </option>
                <option className="" value="en" lang="en">
                    English
                </option>
                <option className="" value="es" lang="es">
                    Español (Spanish)
                </option>
                <option className="" value="fr" lang="fr">
                    Français (French)
                </option>
                <option className="" value="it" lang="it">
                    Italionano (Italian)
                </option>
            </select>
        )
    }
}
export default LanguageSelector;