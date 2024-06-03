import React, { Component } from "react";
import Artist from "./Artist";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/"; //API address
class App extends Component {
  state = { artistQuery: "", artist: null, tracks: [] }; //state of current parameters

  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value }); //artistQuery gets updated with event value
  };

  searchArtist = () => {
    console.log("this.state", this.state); //shows current state of all state objects

    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`) //fetch method
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          //if retrieve artists have more than 0 total
          const artist = json.artists.items[0];
          this.setState({ artist });
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => {
              this.setState({ tracks: json.tracks });
            })
            .catch((error) => alert(error.message));
        }
      })
      .catch((error) => alert(error.message));
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //if event key is Enter button, then use searchArtist method
      this.searchArtist();
    }
  };

  render() {
    console.log("this.state", this.state);
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
        <Artist artist={this.state.artist} />{" "}
        {/*Call Artist componentn and pass down artist object from this.state.artist as a prop*/}
      </div>
    );
  }
}

export default App;
