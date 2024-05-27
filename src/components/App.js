import React, { Component }from "react";
class App extends Component {
    state = { artistQuery: "" } //state of current parameters

    updateArtistQuery = event => {
        console.log("event.target.value", event.target.value);
        this.setState({ artistQuery : event.target.value}); //artistQuery gets updated with event value
    }

    searchArtist = () => {
        console.log("this.state", this.state); //shows current state of all state objects
    }

    handleKeyDown = event => {
        if(event.key === "Enter") { //if event key is Enter button, then use searchArtist method
            this.searchArtist();
        }
    }
    
    render() {
        return(
            <div>
            <h2>Music Master</h2>
            <input 
                onChange={this.updateArtistQuery} //any changes to input calls updateArtistQuery
                onKeyDown={this.handleKeyDown} //pressing Enter calls this method
                placeholder="Search for Artist"/> 
            <button onClick={this.searchArtist}>Search</button>  {/*On Click, calls search Artist method*/}
            </div>
        );
    }
}

export default App;