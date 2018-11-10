import React, { Component } from 'react';
import ApiEvent from './ApiEvent';

class ApiList extends Component {
	render() {
		if (this.props.data.length === 0) {
			return <h4 className="no-events">No events in this area</h4>;
		} else {
			const { data } = this.props;
			return (
				<ul className="event-list">
					{data.map((number, id) => {
						return <ApiEvent info={number} key={id} />;
					})}
				</ul>
			);
		}
	}
}
export default ApiList;
