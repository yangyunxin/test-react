import React, {Component} from 'react';
import TestMx from './TestMx';

class Test extends Component {
	constructor(props) { super(props) }
	render() {
		return (
			<div>{this.props.test}</div>
		)
	}
}
export default TestMx(Test);