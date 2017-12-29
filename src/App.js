import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {

  constructor() {
    super();
  }

  getAvatar () {
    const avatar = require('./assets/img/avatar.svg');
    return avatar;
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <header>
            <div className="app-logo">Logo</div>
            <div className="search">
              <input id="search" type="text" placeholder="Search"/>
              <select name="search-options">
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="playlist">Playlist</option>
              </select>
            </div>
            <div className="user-info">
              <span className="username">User</span>
              <img className="user-icon" src={this.getAvatar()} alt="avatar" />
            </div>
          </header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Artists</li>
              <li>Albums</li>
              <li>PlayLists</li>    
            </ul>
          </nav>
          <section className="content">
            <section className="home">
              <h1>Week Artist</h1>
              <article className="artist">
                <h2>John Williams</h2>
                <ul>
                  <li className="album">
                    <a href="#">
                      <img className="disc-cover"       src="https://images-na.ssl-images-amazon.com/images/I/71VXSEFLK-L._SX355_.jpg" alt="CD The Music of America" />
                      The Music of America
                    </a>
                  </li>
                  <li className="album">
                    <a href="#">
                      <img className="disc-cover" src="https://www.vinylnet.co.uk/_assets/_user/images/prods/vinylnet_thebestofjohnwilliams_1476999797833957_01.jpg" alt="CD The Best of John Williams" />
                      The Best of John Williams
                    </a>
                  </li>
                </ul>
              </article>
            </section>
          </section>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
