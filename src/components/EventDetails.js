import React, { Component } from 'react';
import api from '../lib/api-service';
import JoinButton from './JoinButton';
import MicrolinkCard from 'react-microlink';

class EventDetails extends Component {
	componentDidMount() {
		const { id } = this.props;
		api
			.getEventDetails(id)
			.then((result) => {
				const data = result.data.resultsPage.results.event;
				this.setState({
					data: data
				});
			})
			.catch(() => {});
	}

	render() {
		if (this.state) {
			var { displayName, uri, location, start, venue } = this.state.data;
			if (this.state.data.type === 'Concert') {
				displayName = this.state.data.performance[0].displayName;
			}
			return (
				<div>
					<div className="image-wrapper">
						<div type="text/x-template" id="blog-card">
							<article className="blog-card blog-card-big">
								<MicrolinkCard
									apiKey="0RCIGKSrMD2uIMODno7Wk6H4SLixVZqW6oWAl0f6"
									url={`${uri}`}
									href={`${uri}`}
									size="large"
									className="extralarge"
								/>

								<div className="article-details black-background">
									<h4 className="post-category">{start.date}</h4>

									<h2 className="post-title">{displayName}</h2>
									<p className="post-author"> {location.city}</p>
									<p className="post-description">{venue.displayName}</p>
									<JoinButton id={this.props.id}> JOIN</JoinButton>
									<a className="join-btn info" href={uri}>
										{' '}
										More Info{' '}
									</a>
								</div>
							</article>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<p>{this.props.id} LOADING </p>
				</div>
			);
		}
	}
}
export default EventDetails;
