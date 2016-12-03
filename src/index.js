import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import About from './components/about/AboutPage';
import Catalog from './components/catalog/CatalogPage';
import Register from './components/register/RegisterPage';
import Login from './components/login/LoginPage';
import Home from './components/home/HomePage';
import Create from './components/create/CreatePage';
import Edit from './components/edit/EditPage';
import Delete from './components/delete/DeletePage';
import User from './components/user/UsersPage';


//Manage routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="catalog" component={Catalog}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="create" component={Create}/>
            <Route path="edit/:teamId" component={Edit}/>
            <Route path="delete/:teamId" component={Delete}/>
            <Route path="users" component={User}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
