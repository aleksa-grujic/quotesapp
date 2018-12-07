import React, {Component} from 'react';
import { Row, Col, Card } from 'reactstrap';

class Quote extends Component {

	Vote(key) {
		 Meteor.call('quotes.vote', key);
		 this.refs.btn.setAttribute("disabled", "disabled");
	}

	render() {
		return (
			<div className="quote">
				<Card>
					<Row>

						<Col sm={{ size: 10}}>
								<blockquote className="blockquote mb-0">
									<p>{this.props.quote}</p>
									<footer className="blockquote-footer">
										<cite title="Source Title">{this.props.author}</cite>
									</footer>
								</blockquote>
						</Col>

						<Col sm={{size: 2}}>
							<h2>{this.props.vote}</h2>
							<button
								ref="btn"
								className="btn btn-outline-primary"
								onClick={() => this.Vote(this.props.id)}
							>
								Vote!
							</button>
							<footer>
								<small>{this.props.date.toLocaleDateString()}</small>
							</footer>
						</Col>

					</Row>
				</Card>
			</div>
		);
	}
}

export default Quote;
