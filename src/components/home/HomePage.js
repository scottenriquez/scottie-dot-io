import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="page-contents">
				<div id="home-page-container" className="container">
					<img src="http://scottie.io/content/images/kinbw.png" id="homepage-denali-background"/>
				</div>
				<div className="absolute-center-navbar-offset">
					<h1>Scottie</h1>
				</div>
			</div>
		);
	}
}

export default HomePage;