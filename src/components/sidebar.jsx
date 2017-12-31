import avatar from '../assets/img/avatar.svg';
import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<div className="user-info">
					<img className="avatar" src={avatar} alt="avatar" />
					<span className="username">John Doe</span>
				</div>
				<nav>
					<a className="active" href="#">Home</a>
					<a href="#">Artists</a>
					<a href="#">Albums</a>
					<a href="#">PlayLists</a>
				</nav>
			</div>
		)
	}
}

export default Sidebar;