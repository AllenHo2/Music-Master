import React, { Component } from "react";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/"; //API address
class App extends Component {
  state = { artistQuery: "", artist: null }; //state of current parameters

  updateArtistQuery = (event) => {
    console.log("event.target.value", event.target.value);
    this.setState({ artistQuery: event.target.value }); //artistQuery gets updated with event value
  };

  searchArtist = () => {
    console.log("this.state", this.state); //shows current state of allde  state objects

    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`) //fetch method
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json); //outputs json of retrieved artists

        if (json.artists.total > 0) {
          //if retrieve artists have more than 0 total
          const artist = json.artists.items[0];

          console.log("artist", artist);
          this.setState({ artist });
        }
      });
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //if event key is Enter button, then use searchArtist method
      this.searchArtist();
    }
  };

  render() {
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery} //any changes to input calls updateArtistQuery
          onKeyDown={this.handleKeyDown} //pressing Enter calls this method
          placeholder="Search for Artist"
        />
        <button onClick={this.searchArtist}>Search</button>{" "}
        {/*On Click, calls search Artist method*/}
      </div>
    );
  }
}

export default App;
