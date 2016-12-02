import React from 'react';

export default class CommentForm extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			author: '',
			text: '',
		}
	}
	handleAuthorChange(e) {
		this.setState({author: e.target.value})
	}
	handleTextChange(e) {
		this.setState({text: e.target.value})
	}
	handleSubmit(e) {
		e.preventDefault();
		let author = this.state.author;
		let text = this.state.text;
		if (!author || !text) {
			return;
		}
		this.props.onCommentSubmit({author: author, text: text})
		//todo do ajax
		this.setState({author: '', text: ''})
	}
	render() {
		return (
			<form className="commentForm">
				<input value={this.state.author} onChange={this.handleAuthorChange.bind(this)} type="text" placeholder="your name" />
				<input value={this.state.text} onChange={this.handleTextChange.bind(this)} type="text" placeholder="Say something..." />
				<input type="submit" value="Post" />
			</form>
		)
	}
}