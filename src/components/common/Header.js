import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

const Header = () => {
	return(
		<nav className="orange darken-4">
			<div className="nav-wrapper">
				<IndexLink to="/" className="brand-logo">Scottie</IndexLink>
				<ul className="right hide-on-med-and-down">
					<li><Link to="/" className="waves-effect waves-light btn grey darken-4">Resume</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;