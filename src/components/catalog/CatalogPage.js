import React, {Component} from 'react';
import Team from './Team';
import {loadTeams} from '../../models/team';
//This will be controller-view component

import observer from '../../models/observer'

/*constructor(props) {//added
 super(props);
 //Make check for logged in user through the state
 this.state = {
 loggedIn: false
 };
 this.sendProjectId = this.sendProjectId.bind(this);
 }
 componentDidMount() {//added
 observer.sendProjectId = this.sendProjectId;
 }
 sendProjectId(){//added
 //console.log(this.props.teamId);
 return this.props.teamId;
 }*/

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

        this.sendProjectId = this.sendProjectId.bind(this);//added
    }

    sendProjectId(teamId) {//added
        console.log(teamId);
        return teamId;
    }

    componentDidMount() {
        loadTeams(this.onLoadSuccess);
        observer.sendProjectId = this.sendProjectId;
    }

    onLoadSuccess(response) {
        this.setState({teams: response});
    }

    render() {
        return (
            <div>
                <h1>Catalog Page</h1>
                {this.state.teams.map((el, i) => {
                    this.sendProjectId(el._id);
                    return <Team key={i}
                                 name={el.name}
                                 description={el.description}
                                 teamId={el._id}
                                 creator={el._acl.creator}
                                 beginning={el.beginning}
                                 deadline={el.deadline}
                    />
                })}
            </div>
        )
    }
}
