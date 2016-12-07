import React, {Component} from 'react';
import './Projects.css';
import {Link} from 'react-router';

export default class Project extends Component{
    render(){
        return(
        <div id="teamsILead">
        <form id="myProjects">
            <div id={this.props.teamId}>
            <div id="teamName">
                    <h4 className="description">Name</h4>
                    <h2>{this.props.name}</h2>
            </div>
                    <h4 className="description">Description</h4>
                    <p>{this.props.description || "Description is empty"}</p>
                    <h4 className="description">Beginning</h4>
                    <p>{this.props.beginning}</p>
                    <h4 className="description">Deadline</h4>
                    <p>{this.props.deadline}</p>
                    <h4 className="description">Team Management</h4>
                    <div id="teamManagementBtns">
                    <Link to={"/edit/" + this.props.teamId} className="btn btn-primary">Edit</Link>
                    <Link to={"/delete/" + this.props.teamId} className="btn btn-danger">Delete</Link>
                    </div>
                    <h4 className="description">User Management</h4>
                <div id="userManagementBtns">
                    <Link to={this.props.teamId + "/users"} className="btn btn-primary">Add Members</Link>
                    <Link to={this.props.teamId + "/users/remove"} className="btn btn-primary">Remove Members</Link>
                </div>
                    <h4 className="description">Meetings</h4>
                <div id="meetingsManagementBtns">
                    <Link to={'/meeting/'+ this.props.teamId + '/create' } className="btn btn-success">Create Meeting</Link>
                    <Link to={'/meeting/'+ this.props.teamId + '/edit' } className="btn btn-success">Edit Meetings</Link>
                    <span className="spanner">Files</span>
                    <Link to={"/files/" + this.props.teamId} className="btn btn-primary">Show</Link>
                </div>
                </div>
        </form>
        </div>
        )
    }
}
