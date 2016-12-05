import React, {Component} from 'react';
import './Team.css';
import {Link} from 'react-router';

export default class Team extends Component{

    render(){
        return(
                <div className="col-sm-4" id={this.props.teamId}>
                    <div className="card card-block">
                        <p className="card-text">Name</p>
                        <h3 className="card-title">{this.props.name}</h3>
                        <Link to={"/meeting/" + this.props.teamId} className="btn btn-default" >Meetings</Link>
                    </div>
                </div>
        )
    }
}