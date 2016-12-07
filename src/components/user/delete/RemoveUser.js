import React, {Component} from 'react';
//Load some CSS
//import {Link} from 'react-router';

export default class RemoveUser extends Component {
    render() {
        return (
            <div className="col-sm-4 user-box">
                <div className="card card-block">
                    <p className="card-text">Name</p>
                    <h3 className="card-title">{this.props.username}</h3>
                    <button className="btn-primary" onClick={() => this.props.removeUserFromTeam(this.props.userId)}>Remove User</button>
                </div>
            </div>
        )
    }
}