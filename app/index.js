"use strict";
import React from 'react';
import { render } from 'react-dom';
import CommentBox from './components/CommentBox';

require('./css/index.css');

render(
	<CommentBox pollInterval={2000} />,
	document.querySelector("#app")
);