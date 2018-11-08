import React, { Component } from 'react';
import CalendarEvent from '../components/CalendarEvent';

class Calendar extends Component {
	state = {
		joined: true
	};

	render() {
		const { data } = this.props;
		if (this.props.data.length < 1) {
			return (
				<ul className="calendar-wrapper">
					<h3>Your Calendar</h3>
					<div type="text/x-template" id="blog-card">
						<div className="card-link">
							<article className="blog-card">
								<div className="article-details">
									<a href={'/lobby/'}>
										{' '}
										<h2 className="post-title">Add events to your Calendar</h2>
									</a>
								</div>
							</article>
						</div>
					</div>
				</ul>
			);
		} else {
			return (
				<ul className="calendar-wrapper">
					<h3>Your Calendar</h3>
					{data.map((number, id) => <CalendarEvent info={[ number ]} key={id} />)}
				</ul>
			);
		}
	}
}

export default Calendar;
