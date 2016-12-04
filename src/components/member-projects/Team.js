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
                <span className="spanner">Management</span>
                <Link to={"/edit/" + this.props.teamId} className="btn btn-default">Edit</Link>
            </div>
        )
    }
}