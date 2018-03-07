import Albums from './albums';
import AlbumDetail from './album-detail';
import Artists from './artists';
import Home from './home';
import Playlists from './playlists';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class Content extends Component {

	constructor(props) {
		super(props);
		console.log('Props: ', props);
	}

	render() {
		console.warn(this.props.currentTracks)
		return (
			<section className="content">
				<h1 id="content-description">{this.props.contentDescription}</h1>
				<Route exact path="/home" render={() => 
					<Home 
						albums={this.props.albums} 
						setAlbum={this.props.setAlbum}/>} 
					/>
				<Route exact path="/artists" component={Artists} />
				<Route exact path="/albums" render={() => <Albums />} />
				<Route exact path="/albums/:id" render={() => 
					<AlbumDetail 
						currentAlbum={this.props.currentAlbum}
						currentTracks={this.props.currentTracks}
						setTracks={this.props.setTracks}/>} 
					/>
				<Redirect to="/home" />
				<Route exact path="/playlists" component={Playlists} />
			</section>
		)
		
	}
}

export default Content;