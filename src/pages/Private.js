import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import auth from '../lib/auth-service';
class Private extends Component {
	state = {
		joined: true,
		user: this.props.user
	};

	componentDidMount() {
		auth
			.me()
			.then((user) => {
				this.setState({
					user
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const user = this.state.user;

		return (
			<div className="profile-card">
				<div className="snip1336 figure">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample" />
					<figcaption>
						<img src={user.profilePicture} alt="profile-sample" className="profile" />
						<h2>Welcome {user.username}</h2>
						<h5>
							<span>Name:</span> {user.name}
						</h5>
						<h5>
							<span>Age:</span> {user.age}
						</h5>
						<p>{user.about} </p>

						<Link to="/edit" className="btn info">
							EDIT INFO
						</Link>
					</figcaption>
				</div>

				<Calendar data={user.eventsJoined} />
			</div>
		);
	}
}

export default withAuth()(Private);
