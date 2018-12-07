import { Mongo } from 'meteor/mongo';

Meteor.methods({
	'quotes.insert': function (quote, author) {
		return Quotes.insert({
			createdAt: new Date(),
			content: quote,
			author: author,
			agree: 0
		});
	},
	'quotes.vote': function (id) {
		return Quotes.update(
			{_id: id},
			{$inc: {
				agree: 1
				}}
		)
	}
});

export const Quotes = new Mongo.Collection('quotes');
