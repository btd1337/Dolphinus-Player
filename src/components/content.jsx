import Home from './home';
import React, { Component } from 'react';

class Content extends Component {

	render() {
		return (
			<section className="content">
				<h1 id="content-description">{this.props.contentDescription}</h1>
				<Home />
			</section>
		)
		
	}
}

export default Content;