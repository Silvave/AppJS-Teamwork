import React, {Component} from 'react';
//Load some CSS
import {Link} from 'react-router';

export default class User extends Component {
    render() {
        return (
            <div className="team-box">
                <span className="spanner">Name</span>
                <span className="spanner">{this.props.username}</span>
                <input 
                    type="button" 
                    value="Add User" 
                    onClick={() => this.props.addUser(this.props.userId)}/>
            </div>
        )
    }
}