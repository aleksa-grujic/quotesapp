import React, { Component } from 'react';
import { Row, Col, Nav, NavLink, NavItem } from 'reactstrap';
import { createContainer } from 'meteor/react-meteor-data'
import { ReactiveVar } from 'meteor/reactive-var';

import {Quotes} from "../../../collections/Quotes";
import Quote from './Quote';

var sort = new ReactiveVar({createdAt: -1});
var filter = 'newest';

class QuotesList extends Component {

	renderRows() {
		return this.props.quotes.map(Quotes => {
			const {content, author, createdAt, _id, agree} = Quotes;
			return (
				<Quote key={_id}
							 id={_id}
							 quote={content}
							 author={author}
							 vote={agree}
							 date={createdAt}
				/>
			);
		})
	}
	static filterNewest() {
		sort.set({createdAt: -1});
		filter = 'newest';

	}
	static filterPopular() {
		sort.set({agree: -1});
		filter = 'mostPopular';
	}

	render () {
		return (
			<Row>
				<Col sm="12" md={{ size: 10, offset: 1 }}>
					<Nav tabs>

						<NavItem>
							<NavLink
								onClick={QuotesList.filterPopular}
								className={filter === 'mostPopular' ? "active" : ""}
								href="#most-popular"
							>
								Most Popular
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink
								onClick={QuotesList.filterNewest}
								className={filter === 'newest' ? "active" : ""}
								href="#newest"
							>
								Newest
							</NavLink>
						</NavItem>
					</Nav>
					{this.renderRows()}
				</Col>
			</Row>

		);
	}
}



export default createContainer(() => {
	Meteor.subscribe('Quotes');
	if ( filter === 'mostPopular') {
		return { quotes: Quotes.find({}, {sort: sort.get()}).fetch() };
	}else {
	return { quotes: Quotes.find({}, {sort: sort.get()}).fetch() }}
},QuotesList);
