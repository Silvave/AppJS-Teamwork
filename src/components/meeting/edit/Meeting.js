import React, {Component} from 'react';
import '../Meeting.css';
import {Link} from 'react-router';

export default class Meeting extends Component{
    render(){
        return(
                <div className="col-sm-4">
                    <div className="card card-block justified">
                        <p className="card-text">Topic</p>
                        <h4 className="card-title">{this.props.topic}</h4>
                        <p className="card-text">Time</p>
                        <h4 className="card-title">{this.props.time}</h4>
                        <hr/>
                        <Link to={'/meeting/'+ this.props.teamId + '/edit/' + this.props.meetingId} className="btn btn-primary">Edit Meeting</Link>
                        <hr/>
                        <Link to={'/meeting/'+ this.props.teamId + '/edit/' } className="btn btn-danger">Delete Meeting</Link>
                    </div>
                </div>
        )
    }
}