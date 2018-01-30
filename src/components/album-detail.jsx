import React, { Component } from 'react';

class AlbumDetail extends Component {


	constructor(props) {
		super(props);
		console.log('Props:', props);
	}

	render() {
		return <div>
				<h1>Album detail works!!</h1>
				<p>Album atual {this.props.currentAlbum}</p>
			</div>
	}
}

export default AlbumDetail;