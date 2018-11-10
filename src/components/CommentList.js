import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
	render() {
		const data = this.props.data;
		let element = data.map((number, id) => <Comment info={[ number ]} key={id} />);
		return <ul className="scrollbox">{element}</ul>;
	}
}
export default CommentList;
