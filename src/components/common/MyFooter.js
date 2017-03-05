import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

const MyFooter = () => {
	return(
		<footer className="page-footer grey darken-3">
			<div className="container">
				<div className="row">
					<div className="col l6 s12">
						<p className="orange-text">@to-do: update links here</p>
					</div>
				</div>
			</div>
			<div className="footer-copyright grey darken-4">
				<div className="container center-align">
					<p className="orange-text">Made with love by Scottie Enriquez</p>
				</div>
			</div>
		</footer>
	);
};

export default MyFooter;
