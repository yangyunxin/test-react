import React, {Component} from 'react';
import Mock from 'mockjs';
import $ from 'jquery';
//mock模拟数据
Mock.mock(/data/, {
	'data|2-3': [{
		'id|+1': 1,
		'author': '@sentence(1)',
		'text': '@sentence(3, 5)'
	}]
})
Mock.mock(/test/, {
	'data|2-3': [{
		'id|+1': 1,
	}]
})

let TestMx = Test => class extends Component {
	static defaultProps = { test: 'Super' }
	componentDidMount() {
		// async function f() {
		// 	return 'hello world';
		// }
		// f().then(v => console.log(v))
		
		// async function getTitle(url) {
		// 	let response = await $.post(url);
		// 	return response
		// }
		// console.log(getTitle('/data'))
		// getTitle('/data')
		// .then(v => console.log(v))
		
		async function dbFunc(db) {
			
		}
	}
	render() {
		return <Test {...this.props} {...this.state} />;
	}
}
export default TestMx;