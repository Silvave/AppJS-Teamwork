import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Team extends Component{

    render(){
        return(
                <div className="projectsIWorkOn" id={this.props.teamId}>
                    <form id="projectsIWorkOn">
                        <p>Name</p>
                        <h2>{this.props.name}</h2>
                        <Link to={"/meeting/" + this.props.teamId} className="btn btn-default" >Meetings</Link>
                    </form>
                </div>
        )
    }
}