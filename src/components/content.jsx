import Albums from './albums';
import Artists from './artists';
import Home from './home';
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class Content extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="content">
				<h1 id="content-description">{this.props.contentDescription}</h1>
				<Route path="/home" render={() => <Home albums={this.props.albums} setAlbum={(album) => this.props.setAlbum(album)}/>} />
				<Route path="/artists" render={() => <Artists />} />
				<Route path="/albums/:id" render={() => 
					<Albums 
						album={this.props.currentAlbum}
						setAlbum={(album) => this.props.setAlbum(album)} />} />
				<Redirect to="/home" />
			</section>
		)
		
	}
}

export default Content;