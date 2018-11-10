import React, { Component } from 'react';
import auth from '../lib/auth-service';
import Calendar from './Calendar';

class ProfileCard extends Component {
	state = {
		user: {
			eventsJoined: [],
			profilePicure: 'http://profilepicturesdp.com/wp-content/uploads/2018/06/blank-user-profile-picture-1.gif'
		}
	};
	componentWillMount = () => {
		auth.getUser(this.props.match.params.id).then((data) => {
			this.setState({
				user: data
			});
		});
	};
	renderInfo = () => {
		return <Calendar data={this.state.user.eventsJoined} />;
	};
	render() {
		const user = this.state.user;

		return (
			<div className="profile-card">
				<div className="snip1336 figure">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample" />
					<figcaption>
						<img src={user.profilePicture} alt="profile-sample" className="profile" />
						<h2> {user.username}'s profile</h2>
						<h5>
							<span>Name:</span> {user.name}
						</h5>
						<h5>
							<span>Age:</span> {user.age}
						</h5>
						<p>{user.about} </p>
					</figcaption>
				</div>

				<Calendar data={user.eventsJoined} />
			</div>
		);
	}
}

export default ProfileCard;
