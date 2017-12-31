import './App.css';
import avatar from './assets/img/avatar.svg';
import logo from './logo.svg';

import Content from './components/content';
import Header from './components/header';
import Home from './components/home';
import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import SpotifyWebApi from 'spotify-web-api-js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contentDescription: 'Week Artist',
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

  render() {
    const { inputValue } = this.state;
    console.log(this.state.contentDescription);
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
              contentDescription={this.state.contentDescription} />
          </div>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default App;
