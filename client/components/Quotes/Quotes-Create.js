
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class QuoteCreate extends Component {

	CreateQuote(e) {
		e.preventDefault();
		Meteor.call('quotes.insert', this.refs.quote.value, this.refs.author.value);
		console.log('### Quotes-Create Quote', this.refs.quote.value );
		console.log('### Quotes-Create Author', this.refs.author.value );
	}

	render () {
		return (
			<Row>
				<Col sm={{ size: 8, order: 2, offset: 2 }}>
					<form onSubmit={this.CreateQuote.bind(this)}>
						<div className="form-group">
							<label>Quote:</label>
							<textarea className="form-control" placeholder="Enter your quote here:" ref="quote"/>
						</div>
						<div className="form-group">
							<label>Author:</label>
							<input type="text" className="form-control" placeholder="Author" ref="author"/>
						</div>
						<button className="btn btn-primary">Enter!</button>
					</form>
				</Col>
			</Row>
		);
	}
}

export default QuoteCreate;
