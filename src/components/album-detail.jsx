import React, { Component } from 'react';

class AlbumDetail extends Component {


	constructor(props) {
		super(props);
	}

	render() {
		return <section className="album-detail">
				<div id="album-cover">
					<img 
						src={this.props.currentAlbum.cover} 
						alt={this.props.currentAlbum.name} 
						/>
				</div>
				<div id="album-details">
					<p id="album-name">Album: {this.props.currentAlbum.name}</p>
					<p id="album-artists">Artists</p>
					<ul>
						{this.props.currentAlbum.artists.map((artist) => (
							<li>{artist.name}</li>
						))}
					</ul>
					<p> Tracks </p>
					<ul>
						{this.props.currentTracks.map((track) => 
							<li>{track.name}</li>
						)}
					</ul>
				</div>
			</section>
	}
}

export default AlbumDetail;