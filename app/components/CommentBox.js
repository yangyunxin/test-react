import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Test from './Test';
import Mock from 'mockjs';
import $ from 'jquery';
//mock模拟数据
Mock.mock(/data.json/, {
	'data|2-3': [{
		'id|+1': 1,
		'author': '@sentence(1)',
		'text': '@sentence(3, 5)'
	}]
})
export default class CommentBox extends React.Component {
	constructor(...args) {
		//super为了生成子类this
		super(...args);
		this.state = {
			data: []
		}
	}
	loadCommentsFromServer() {
		$.post('data.json')
		.done(function (data) {
			this.setState({data: JSON.parse(data).data});
		}.bind(this))
		.fail(function (data) {
			throw data;
		})
	}
	handleCommentSubmit(comment) {
		//TODO submit to the server and refresh the list
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		this.timer = setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval)
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return (
			<div className="commentBox">
				<h1>Comment</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
				<Test />
			</div>
		)
	}
}