import React, {Component} from 'react';
import Header from './components/common/Header';
import observer from './models/observer';
import {logout} from './models/user'
import {Link} from 'react-router';
import '../node_modules/toastr/build/toastr.min.css';
import './components/user/login/login-transition.css';
import toastr from 'toastr';
import './transition-def.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {
    constructor(props) {
        super(props);
        //Make check for logged in user through the state
        this.state = {
            loggedIn: false
        };
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        observer.onSessionUpdate = this.onSessionUpdate;
        this.checkUserCredentials();
    }

    onSessionUpdate() {
        this.checkUserCredentials();
    }

    //Check if we have logged user in the sessionStorage
    //if we have logged user we will take the username and make new component for the main page GREETING /common
    checkUserCredentials() {
        let username = sessionStorage.getItem('username');
        if (!username) {
            this.setState({
                loggedIn: false
            })
        }
        else {
            this.setState({
                loggedIn: true,
                username: username
            })
        }
    }

    onLogout() {
        toastr.success('You have been successfully logged out');
        this.checkUserCredentials();
    }

    render() {
        //Check if we have logged user - manage which links are visible
        if (this.state.loggedIn) {
            return (
                <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
                <div className="container">
                        <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                        <li role="presentation" className="active"><Link to='/' className="btn btn-default">Home</Link></li>
                        <li role="presentation"><Link to='/projects' className="btn btn-default">Projects I lead</Link></li>
                        <li role="presentation"><Link to='/create' className="btn btn-default">Create a Team</Link></li>
                        <li role="presentation"><Link to='/member-projects' className="btn btn-default">Projects I work on</Link></li>
                        <li role="presentation"><Link to='' className="btn btn-default" onClick={() => logout(this.onLogout)}>Logout</Link></li>
                        <li role="presentation"><Link to='/about' className="btn btn-default">About</Link></li>
                    </Header>
                    {this.props.children}
                </div>
                </ReactCSSTransitionGroup>
            );
        }

        return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
            <div className="container">
                <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                    <li role="presentation" className="active"><Link to='/' className="btn btn-default">Home</Link></li>
                    <li role="presentation"><Link to='/login' className="btn btn-default">Login</Link></li>
                    <li role="presentation"><Link to='/register' className="btn btn-default">Register</Link></li>
                    <li role="presentation"><Link to='/about' className="btn btn-default">About</Link></li>
                </Header>
                {this.props.children}
            </div>
            </ReactCSSTransitionGroup>
        )

    }
}
