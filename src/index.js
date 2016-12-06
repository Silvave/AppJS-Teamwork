import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import About from './components/about/AboutPage';
import Project from './components/projects/ProjectsPage';
import Register from './components/user/register/RegisterPage';
import Login from './components/user/login/LoginPage';
import Home from './components/home/HomePage';
import Create from './components/projects/create/CreatePage';
import Edit from './components/projects/edit/EditPage';
import Files from './components/projects/files/FilesPage';
import Delete from './components/projects/delete/DeletePage';
import User from './components/user/UsersPage';
import MemberPage from './components/member-projects/MemberProjectPage'
import Meeting from './components/meeting/MeetingPage'
import CreateMeeting from './components/meeting/create/CreatePage'
import EditMeetings from './components/meeting/edit/EditMeetingsPage'
import EditMeeting from './components/meeting/edit/EditPage'


//Manage routes
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="projects" component={Project}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="create" component={Create}/>
            <Route path="member-projects" component={MemberPage}/>
            <Route path="meeting/:teamId" component={Meeting}/>
            <Route path="meeting/:teamId/create" component={CreateMeeting}/>
            <Route path="meeting/:teamId/edit" component={EditMeetings}/>
            <Route path="meeting/:teamId/edit/:meetingId" component={EditMeeting}/>
            <Route path="edit/:teamId" component={Edit}/>
            <Route path="filesc/:teamId" component={Files}/>
            <Route path="delete/:teamId" component={Delete}/>
            <Route path=":teamId/users" component={User}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
