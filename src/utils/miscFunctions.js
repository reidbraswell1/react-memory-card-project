// Toggle debug display 
const processDebugToggle = function(event) {
    console.log(`---Begin ${this.processDebugToggle.name}---`);
    console.log(`Event =`, event);
    if(this.state.debug) {
        this.setState({debug:false});
        document.getElementById("app-debugging").style.display="none";
    }
    else {
        this.setState({debug: true});
        document.getElementById("app-debugging").style.display="block";
    }
    console.log(`---End ${this.processChoice.name}---`);
}
export { processDebugToggle }
