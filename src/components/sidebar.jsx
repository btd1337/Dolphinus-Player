import avatar from '../assets/img/avatar.svg';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Sidebar extends Component {

	profilePic = '';

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="sidebar">
				<div className="user-info">
					<img className="avatar" src={avatar} alt="avatar" />
					<span className="username">{this.props.userName}</span>
				</div>
				<nav>
					<ul>
						<li className="active"><Link to="/home">Home</Link></li>
						<li><Link to="/artists">Artists</Link></li>
						<li><Link to="/albums">Albums</Link></li>
						<li><Link to="/playlists">PlayLists</Link></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Sidebar;