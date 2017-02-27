import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Scott Enriquez</h1>
				<p>software developer | IT analyst | writer | linguist</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
			</div>
		)
	}
}

export default HomePage;