import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from '../../container/Layout'
import Profile from '../../container/Profile'
import Favourite from '../../container/Favourite'
import Trash from '../../container/Trash'

 class AuthRoutes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/profile" exact  component={Profile} />
				<Route path="/favourite" exact component={Favourite} />
				<Route path="/trash" exact component={Trash} />
				<Route path="/" exact  component={Layout} />
				<Redirect from = "*" to="/" />
			</Switch>
		)
	}
}
export default AuthRoutes;
