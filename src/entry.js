var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Teach = require('./teacher/index');
var Admin = require('./admin/index');
var Stud = require('./student/index');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="teacher" component={Teach}/>
		<Route path="student" component={Stud}/>
		<Route path="admin" component={Admin}/>
	</Router>,
	document.getElementById('root')
)