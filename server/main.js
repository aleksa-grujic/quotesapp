import { Meteor } from 'meteor/meteor';
import { Quotes } from '../collections/Quotes';

Meteor.startup(() => {
	Meteor.publish('Quotes', function () {
		return Quotes.find({});
	});

});
