import React from 'react';
import showdown from 'showdown';
import Remarkable from 'remarkable';
const md = new Remarkable();
const converter = new showdown.Converter();

export default class Comment extends React.Component {
	constructor(...args) {
		super(...args)
	}
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<p>{md.render(this.props.children.toString())}</p>
			</div>
		);
	}
}