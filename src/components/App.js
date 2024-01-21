import React, { Component }from "react";

class App extends Component {
    state = { artistQuery: ''};

    updateArtistQuery = event => {
        console.log('event', event);
    }

    ClickedButton = () => {
        console.log('clicked');
    }

    render() {
        return(
            <div>
                <h2>Music Master</h2>   
                <input onChange={this.updateArtistQuery}
                 placeholder='Search for an Artist'/>
                <button>Search</button>
            </div>
        );
    }
}

export default App;