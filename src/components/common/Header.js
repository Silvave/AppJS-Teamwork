import React, {Component} from 'react';
import Greeting from './Greeting';
// import {Link} from 'react-router'
import './Header.css'

export default  class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="jumbotron">
                    <h1>Project Organizer</h1>
                    <Greeting loggedIn={this.props.loggedIn} username={this.props.username}/>
                </div>
                <ul className="nav nav-tabs nav-justified">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}