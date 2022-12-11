const processDebugToggle = function(event) {
    console.log("here",event);
    console.log("Debug=",this.state.debug)
    if(this.state.debug) {
        this.setState({debug:false});
        document.getElementById("app-debugging").style.display="none";
    }
    else {
        this.setState({debug: true});
        document.getElementById("app-debugging").style.display="block";
    }
}
export { processDebugToggle }
