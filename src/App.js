import './App.css';
import avatar from './assets/img/avatar.svg';
import logo from './logo.svg';

import Content from './components/content';
import Header from './components/header';
import Home from './components/home';
import keyIndex from 'react-key-index';
import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      artistOfTheWeek: {
        id: '',
        name: ''
      },
      artist: [],
      albums: [],
      contentDescription: 'Week Artist',
      inputValue: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  componentWillMount() {
    this.setArtistOfTheWeek();
    this.getArtistAlbums('3dRfiJ2650SZu6GbydcHNb');
  }

  getArtistAlbums(artistId) {

    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken('BQCwVJGr6pAi0oMcnOfqUhXpn4XrUdIwX7F98x_O--mUutQeIFxD5iOQHjJKCeEqlLhmaGFpW3FDUE0bhwJNzYM3KRrOfWkLkO605uHPZnv_M6jcy6lSbJ_aDs7Ti71n3QGPODMDOUzGOKbCN26SV39BwwVRyiDZ1HL1yaMCis9Q2JEW6A&refresh_token=AQA4X0tGA66e7jHdh6qbWQmg6L0re9i4n9Lj7TodQaT_wcUvwVPCFGCw9wo0BVRXy07-3iZcf5yMALEwwSXQl3xypxD_047I9Z6c5hQDmQ8b8c2zVSKQwHVXoEPLtnM5DCg');
    
    spotifyApi.getArtistAlbums(artistId)
      .then(data => {
        this.setState({
          albums: data.items.map((data) => {
            return {
              artists: data.artists.map((artist) => {
                return {
                  id: artist.id,
                  name: artist.name,
                  url: artist.href
                }
              }),
              cover: data.images[0].url,
              external_url: data.external_urls.spotify,
              id: data.id,
              name: data.name,
              url: data.href
            }
          })
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setArtistOfTheWeek() {
    this.setState ((prevState) =>{
      return {
        artistOfTheWeek: {
          name: 'John Williams',
          id: '3dRfiJ2650SZu6GbydcHNb'
        }
      }
    });
  }

  onInputChange(e) {
    const { value } = e.target;

    this.setState({
      inputValue: value
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="app">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Monoton');
          @import url('https://fonts.googleapis.com/css?family=Vollkorn:700');
          @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:500i,700i');
          @import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
        </style>
        <div className="box">
          <Header 
            inputValue={this.state.inputValue} 
            onInputChange={this.onInputChange}/>
          <div className="row">
            <Sidebar />
            <Content 
              albums={this.state.albums}
              contentDescription={this.state.contentDescription} />
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
