import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

	componentDidMount() {
		// Render the Blaze accounts form then find the div
		// we just rendered in the 'render' method and place
		// the Blaze accounts form in thate div
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUnmount() {
		// Go find the forms we crated and destroy them
		// We needto clean up those forms ourselfs
		Blaze.remove(this.view);
	}
	render() {
		return (
			<div ref="container"></div>
		);
	}
}
export default Accounts;