import React, {Component} from 'react';
import './Projects.css';
import {Link} from 'react-router';

export default class Team extends Component{
    render(){
        return(
            <div className="col-sm-4" id={this.props.teamId}>
                <div className="card card-block">
                    <p className="spanner">Name</p>
                    <h3 className="card-title">{this.props.name}</h3>
                    <span className="spanner">Description</span>
                    <p>{this.props.description || "Description is empty"}</p>
                    <span className="spanner">Beginning</span>
                    <p>{this.props.beginning}</p>
                    <span className="spanner">Deadline</span>
                    <p>{this.props.deadline}</p>
                    <span className="spanner">Team Management</span>
                    <Link to={"/edit/" + this.props.teamId} className="btn btn-primary">Edit</Link>
                    <Link to={"/delete/" + this.props.teamId} className="btn btn-danger">Delete</Link>
                    <span className="spanner">User Management</span>
                    <Link to={this.props.teamId + "/users"} className="btn btn-primary">Add Members</Link>
                    <Link to={this.props.teamId + "/users/remove"} className="btn btn-primary">Remove Members</Link>
                    <span className="spanner">Meetings</span>
                    <Link to={'/meeting/'+ this.props.teamId + '/create' } className="btn btn-success">Create Meeting</Link>
                    <Link to={'/meeting/'+ this.props.teamId + '/edit' } className="btn btn-success">Edit Meetings</Link>
                </div>
            </div>
        )
    }
}
