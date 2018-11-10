import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		return (
			<div id="wrapper1">
				<div className="video-backgroud">
					<video autoPlay muted loop id="myVideo" src="https://www.youtube.com/watch?v=AipmQ2HWOxg" />
				</div>
				<div id="overlay" />
				<div className="container on-top">
					<div className="title text-center">
						<h1> WELCOME TO </h1>
						<h1 className="title-text">THE BACKSTAGE</h1>
						<Link to="/login" className="btn ">
							Login
						</Link>
						<Link to="/signup" className="btn ">
							Signup
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;

/*  <div className="video-backgroud">
<video autoPlay muted loop id="myVideo">
<source src="images/MOSHED-2018-9-14-15-0-11.mp4" type="video/mp4"/>
</video>
</div> */
