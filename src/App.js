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
    spotifyApi.setAccessToken('BQDm_qQTJK7Ne2aFZ0mPkMr3LU44YX7P6eARlLInE_QsnNp0OpUSiejpZiZzf4gVky56W9SMVJ6mv701bZCDtV71QzXFPdE9KZW53eIz3P4-uDIRQwkwGQ-cl9wMAKUA_5x9GXIMuUNzKGeM1ZGRDQMfnsFrjpVSNzTGPT3FlTKnF2e0ng&refresh_token=AQDTinskPtGEmSVhxpCH_cJOiTV9cvEEkvIZ-54SaxlKVmiMAPN2JsTxM5tO0_aah-BIaBJ3b20QpuPHlUZL5CcIF6EeRx4grSR2pMaAwDBm9FuNtjUEm-us8nhm_J96PSM');
    
    spotifyApi.getArtistAlbums(artistId)
      .then(data => {
        this.setState((prevState) => ({
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
        }))
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

    this.setState((prevState) => ({
      inputValue: value
    }));
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="app">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Monoton');
          @import url('https://fonts.googleapis.com/css?family=Vollkorn:700');
          @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:500i,700i');
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