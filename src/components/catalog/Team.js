import React, {Component} from 'react';
import './Team.css';
import {Link} from 'react-router';

export default class Team extends Component{
    render(){
        return(
            <div className="team-box">
                <span className="spanner">Name</span>
                <span className="spanner">{this.props.name}</span>
                <span className="spanner">Description</span>
                <p>{this.props.description || "Description is empty"}</p>
                <span className="spanner">Beginning</span>
                <p>{this.props.beginning}</p>
                <span className="spanner">Deadline</span>
                <p>{this.props.deadline}</p>
                <span className="spanner">Management</span>
                <Link to={"/edit/" + this.props.teamId} className="btn btn-default">Edit</Link>
                <Link to={"/delete/" + this.props.teamId} className="btn btn-default">Delete</Link>
                <Link to={this.props.teamId + "/users"} className="btn btn-default">Add Members</Link>
            </div>
        )
    }
}
