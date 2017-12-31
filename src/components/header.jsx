import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<header>
				<i className="fa fa-headphones" aria-hidden="true"></i>
				<div className="app-logo">Delphinus Player</div>
				<div className="search">
					<select name="select-search" id="select-search">
						<option value="artist">Artist</option>
						<option value="album">Album</option>
						<option value="playlist">Playlist</option>
					</select>
					<div className='input-wrapper'>
						<input
							id="input-search"
							onChange={this.props.onInputChange}
							placeholder='Search...'
							spellCheck={false}
							value={this.props.inputValue}
						/>
						<span className='input-highlight'>
							{this.props.inputValue.replace(/ /g, "\u00a0")}
						</span>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;