import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import Accounts from './Accounts/Accounts';
import { Meteor } from 'meteor/meteor';

class Header extends Component {

	render() {
		console.log('### header ', Meteor.userId());
		return(
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">QuotesApp</NavbarBrand>

					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Accounts/>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/create">
								Create Quote
							</NavLink>
						</NavItem>
					</Nav>

				</Navbar>
			</div>
		);
	}
}

export default Header;
