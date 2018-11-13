import React, { Component } from 'react';
import MicrolinkCard from 'react-microlink';
import { Link } from 'react-router-dom';

class ApiEvent extends Component {
	render() {
		var displayName = this.props.info.displayName;
		const date = this.props.info.start.date;
		const location = this.props.info.location.city;
		const venue = this.props.info.venue.displayName;
		const id = this.props.info.id;
		const uri = this.props.info.uri;
		if (this.props.info.type === 'Concert') {
			displayName = this.props.info.performance[0].displayName;
		}
		return (
			<article className="blog-card blog-card-small">
				<MicrolinkCard apiKey="0RCIGKSrMD2uIMODno7Wk6H4SLixVZqW6oWAl0f6" url={uri} size="large" />
				<Link to={`/lobby/${id}`} type="text/x-template" id="blog-card">
					<div className="article-details">
						<h4 className="post-category">{date}</h4> <h2 className="post-title">{displayName}</h2>
						<p className="post-description">at {venue}</p>
						<p className="post-author"> {location}</p>
					</div>
				</Link>
			</article>
		);
	}
}
export default ApiEvent;
