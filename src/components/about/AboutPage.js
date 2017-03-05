import React from 'react';
import Footer from '../common/MyFooter';

class AboutPage extends React.Component {
	render() {
		return (
			<div className="page-contents">
				<div className="container">
					<div className="row">
						<div className="col m9">
							<div id="about-me" className="card">
								<div className="card-image">
									<img src="http://scottie.io/content/images/interview.png" />
									<span className="card-title">About Me</span>
								</div>
								<div className="card-content grey darken-4">
									<p></p>
								</div>
							</div>
						</div>
						<div className="col hide-on-small-only m3 l2">
							<div className="toc-wrapper pinned">
								<div>
									<ul className="section table-of-contents">
										<li><a href="#about-me">About Me</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default AboutPage;