import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;

    this.setState({
      inputValue: value
    });
  }

  getAvatar () {
    const avatar = require('./assets/img/avatar.svg');
    return avatar;
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
          <header>
            <i className="fa fa-headphones" aria-hidden="true"></i>
            <div className="app-logo">DELPHINUS PLAYER</div>
            <div className="search">
              <select name="search-options" id="search-options">
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="playlist">Playlist</option>
              </select>
              <div className='input-wrapper'>
                <input
                  id="input-search"
                  onChange={this.onInputChange}
                  placeholder='Search...'
                  spellCheck={false}
                  value={inputValue}
                />
                <span className='input-highlight'>
                  {inputValue.replace(/ /g, "\u00a0")}
                </span>
              </div>
            </div>
          </header>
          <div className="row">
            <div className="sidebar">
              <div className="user-info">
                <img className="avatar" src={this.getAvatar()} alt="avatar" />
                <span className="username">John Doe</span>
              </div>
              <nav>
                <a className="active" href="#">Home</a>
                <a href="#">Artists</a>
                <a href="#">Albums</a>
                <a href="#">PlayLists</a>
              </nav>
            </div>
            <section className="content">
              <section className="home">
                <h1>Week Artist</h1>
                <article className="artist">
                  <h2 className="artist-name">John Williams</h2>
                  <div className="albums">
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="https://images-na.ssl-images-amazon.com/images/I/71VXSEFLK-L._SX355_.jpg" alt="Album The Music of America" />
                          <figcaption className="album-name">
                              The Music of America
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="https://cps-static.rovicorp.com/3/JPG_500/MI0001/117/MI0001117614.jpg?partner=allrovi.com" alt="Album The Music of America" />
                          <figcaption className="album-name">
                          The Millennium Collection: The Best of John Williams & The Boston Pops The Millennium Collection: The Best of John Williams & The Boston Pops
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="https://cdn-s3.allmusic.com/release-covers/500/0001/161/0001161716.jpg" />
                          <figcaption className="album-name">
                            John Williams Plays The Movies
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="http://is4.mzstatic.com/image/thumb/Music/v4/dd/b5/5b/ddb55bff-da75-416f-b227-ad8a6bb97b83/source/600x600bb.jpg" alt="Album The Music of America" />
                          <figcaption className="album-name">
                            Great Composers
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="https://images-na.ssl-images-amazon.com/images/I/814CppgoldL._SL1500_.jpg" alt="Album The Music of America" />
                          <figcaption className="album-name">
                            The Complete Columbia Album Collection
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="album">
                      <div className="vinyl">
                        <div className="grooves"></div>
                        <div className="light"></div>
                        <div className="light-alt"></div>
                        <figure className="macaron">
                          <img className="cover" src="https://images-na.ssl-images-amazon.com/images/I/814CppgoldL._SL1500_.jpg" alt="Album The Music of America" />
                          <figcaption className="album-name">
                            The Complete Columbia Album Collection
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
            </section>
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
