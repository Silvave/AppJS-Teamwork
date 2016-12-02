import React, {Component} from 'react';
import Header from './components/common/Header';
import observer from './models/observer';
import {logout} from './models/user'
import {Link} from 'react-router';


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
        this.checkUserCredentials();
    }

    render() {
        //Check if we have logged user - manage which links are visible
        if (this.state.loggedIn) {
            return (
                <div className="container">
                    <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                        <Link to='/' className="btn btn-default">Home</Link>
                        <Link to='/about' className="btn btn-default">About</Link>
                        <Link to='/catalog' className="btn btn-default">Catalog</Link>
                        <Link to='' className="btn btn-default" onClick={() => logout(this.onLogout)}>Logout</Link>
                    </Header>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div className="container">
                <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                    <Link to='/' className="btn btn-default">Home</Link>
                    <Link to='/about' className="btn btn-default">About</Link>
                    <Link to='/login' className="btn btn-default">Login</Link>
                    <Link to='/register' className="btn btn-default">Register</Link>
                </Header>
                {this.props.children}
            </div>
        )

    }
}