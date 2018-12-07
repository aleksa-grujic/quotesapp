import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter  } from 'react-router-dom';

import { Quotes } from "../collections/Quotes";

import App from './components/App';
import QuotesList from './components/Quotes/Quotes-list';
import QuoteCreate from './components/Quotes/Quotes-Create';

const routes = (
		<BrowserRouter>
			<div>
				<App/>
				<Switch>
					<Route exact path="/" component={QuotesList}/>
					<Route  path="/create" component={QuoteCreate}/>
				</Switch>
			</div>
		</BrowserRouter>
);

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.container'))
});
