import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {

  constructor() {
    super();
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken('BQDOKqu3kiSsP9hPsWRVAy7RdWaHaRkriySLQBVgUiApRDjNzMGROIU8VS2MPODkKaBYyhfrut337WYal22P4ThuRzpebO4fp7stdme1FioiAK9D7AZwV5jvqhNVBQxzMMHKpSMtc9J9wP57xFHesYwRzZKyK_JPM5wlVBNjheKxY6AcxA&refresh_token=AQCca7PouPrK5ERUIOZbd8s7ezXJB7e4f36iRidSASag1aC-PrGr-k2gTUMeHtJlSzPMph_K-cr4w83EUAUDuLETTfGeOgz8w82ddaJOmU9h-FjV9K-8gxUvDd1n_7-L55s');

    // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
