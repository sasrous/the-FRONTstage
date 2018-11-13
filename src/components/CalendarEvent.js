import React, { Component } from 'react';
import api from '../lib/api-service';
import JoinButton from './JoinButton';
import MicrolinkCard from 'react-microlink';

class CalendarEvent extends Component {
	state = {
		id: this.props.info,
		displayName: 'loading',
		date: 'loading',
		venue: 'loading',
		location: 'loading',
		uri: '',
		data: []
	};
	componentDidMount() {
		const id = this.props.info;

		api.getEventDetails(id).then(({ data }) => {
			let eventData = data.resultsPage.results.event;
			this.setState({
				id: eventData.id,
				displayName: eventData.displayName,
				date: eventData.start.date,
				venue: eventData.venue.displayName,
				location: eventData.location.city,
				data: data,
				uri: eventData.uri
			});
		});
	}
	render() {
		const id = this.props.info;

		if (this.state.uri) {
			if (this.state.data.resultsPage.results.event.type === 'Concert') {
				const displayName = this.state.data.resultsPage.results.event.performance[0].displayName;

				return (
					<div type="text/x-template" id="blog-card">
						<article className="blog-card blog-card-small">
							<MicrolinkCard
								apiKey="0RCIGKSrMD2uIMODno7Wk6H4SLixVZqW6oWAl0f6"
								url={`${this.state.uri}`}
								href={'/lobby/' + id}
								size="large"
							/>

							<div className="article-details">
								<h4 className="post-category">{this.state.date}</h4>
								<a href={'/lobby/' + id}>
									{' '}
									<h2 className="post-title">{displayName}</h2>
								</a>

								<p className="post-description">at {this.state.venue}</p>
								<JoinButton id={this.state.id}> </JoinButton>
								<p className="post-author"> {this.state.location}</p>
							</div>
						</article>
					</div>
				);
			} else {
				const displayName = this.state.displayName;
				console.log(displayName, 'hello');
				console.log(this.state.data);
				return (
					<div type="text/x-template" id="blog-card">
						<article className="blog-card blog-card-small">
							<MicrolinkCard
								apiKey="0RCIGKSrMD2uIMODno7Wk6H4SLixVZqW6oWAl0f6"
								url={`${this.state.uri}`}
								href={'/lobby/' + id}
								size="large"
							/>

							<div className="article-details">
								<h4 className="post-category">{this.state.date}</h4>
								<a href={'/lobby/' + id}>
									{' '}
									<h2 className="post-title">{displayName}</h2>
								</a>

								<p className="post-description">{this.state.venue}</p>
								<JoinButton id={this.state.id}> </JoinButton>
								<p className="post-author"> {this.state.location}</p>
							</div>
						</article>
					</div>
				);
			}
		} else {
			return <p>loading</p>;
		}
	}
}

export default CalendarEvent;
