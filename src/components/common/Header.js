import React, {PropTypes} from 'react';
import {IndexLink} from 'react-router';

const Header = () => {
	return(
		<nav>
			<div className="nav-wrapper">
				<IndexLink to="/" className="brand-logo">Scottie</IndexLink>
			</div>
		</nav>
	);
};

export default Header;