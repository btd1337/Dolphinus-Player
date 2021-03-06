import './App.css';
import avatar from './assets/img/avatar.svg';
import logo from './logo.svg';

import Content from './components/content';
import Header from './components/header';
import Home from './components/home';
import { Link, Route, Switch } from 'react-router-dom';
//import keyIndex from 'react-key-index';
import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import SpotifyWebApi from 'spotify-web-api-js';
import { access } from 'fs';

/* Get Spotify Token */
var callbackUrl = window.location.href;
const apiUrl = "https://accounts.spotify.com/authorize?client_id=8cd9f7ebd9984af6a188f12a3120dda8&response_type=token&redirect_uri="+callbackUrl;
var accessToken;
var hash;
if(!window.location.hash){
    window.location.replace(apiUrl);
}else{
    var url = window.location.href;
    hash = url.split('#')[1];
    hash = hash.split('&')[0];
    hash = hash.split('=')[1];
}
accessToken = hash;

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
      currentAlbum: {},
      currentAlbumTracks: [],
      inputValue: '',
      tracks: [],
      userName: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  
  componentWillMount() {
    this.setArtistOfTheWeek();
    this.getArtistAlbums('3dRfiJ2650SZu6GbydcHNb');
    this.getUserInfo();
  } 

  displayName = () => {
    return (this.state.userName === null || this.state.userName === '') ? this.state.userId : this.state.userName;
  }

  getArtistAlbums(artistId) {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getArtistAlbums(artistId)
      .then(data => {;
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

  getAlbumTracks = () => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getAlbumTracks(this.state.currentAlbumId)
    .then((data) => {
        this.setState({currentAlbumTracks: data.items})
      // this.setState((prevState) => {
      //   return {
      //     tracks: data.items.map((track) => {
      //       return {
      //         id: track.id,
      //         name: track.name,
      //         track_number: track.track_number,
      //         url: track.external_urls.spotify
      //       }
      //     })
      //   }
      // })
    })
    .catch(err => console.error('Album get error', err))
  }

  getUserInfo = () => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMe().then(
      data => {
        let displayName = (data.display_name === null || data.display_name === '') ? data.id : data.display_name;
        
        this.setState((prevState) => {
          return {
            userName: displayName
          }
        })
      }
    )

  }

  setAlbum = (albumId) => {
    // this.getAlbumTracks();
    const currentAlbum = this.state.albums.find((album) => {
      return album.id = albumId;  // albumId = album Clicado
    });
    this.setState((prevState) => {
      return {
        currentAlbumId: albumId,  // atribui ao estado
        currentAlbum
      }
    }, this.getAlbumTracks());
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
            <Sidebar 
              userName={this.state.userName} />
            <Content 
              albums={this.state.albums}
              contentDescription={this.state.contentDescription}
              currentAlbum={this.state.currentAlbum}
              currentTracks={this.state.currentAlbumTracks}
              setAlbum={this.setAlbum}
              setTracks={this.getAlbumTracks} />
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;