import React, {Component} from 'react';
//Load some CSS
//import {Link} from 'react-router';

export default class User extends Component {
    render() {
        return (
            <div className="col-sm-4 user-box" id={this.props.teamId}>
                <div className="card card-block">
                    <p className="card-text">Name</p>
                    <h3 className="card-title">{this.props.username}</h3>
                    <button className="btn-primary" onClick={() => this.props.addUser(this.props.userId)}>Select User</button>
                </div>
            </div>
        )
    }
}