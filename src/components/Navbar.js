import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Navbar extends Component {
	render() {
		const { isLogged, logout } = this.props;
		if (isLogged) {
			return (
				<div className="nav-bar">
					<Link className="nav-bar-item btn" to="/">
						Home
					</Link>
					<Link className="nav-bar-item btn" to="/private">
						{' '}
						Profile
					</Link>
					<Link className="nav-bar-item btn" to="/lobby">
						{' '}
						Lobby
					</Link>
					<Link className="nav-bar-item btn logout" to="/" onClick={logout}>
						Logout
					</Link>
				</div>
			);
		} else {
			return (
				<div className="nav-bar">
					<Link className="nav-bar-item btn" to="/">
						Home
					</Link>
					<Link className="nav-bar-item btn" to="/private">
						{' '}
						Profile
					</Link>
					<Link className="nav-bar-item btn" to="/lobby">
						{' '}
						Lobby
					</Link>
					<Link className="nav-bar-item btn logout" to="/login">
						Login
					</Link>
				</div>
			);
		}
	}
}

export default withAuth()(Navbar);
