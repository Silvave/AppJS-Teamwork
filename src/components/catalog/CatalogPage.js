import React, {Component} from 'react';
import Team from './Team';
import {loadTeams} from '../../models/team';
import {Link} from 'react-router'
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
<<<<<<< HEAD

    onLoadSuccess(response) {
=======
    onLoadSuccess(response){
        console.log(response)
>>>>>>> 23b89b5cc9346cc17d2ac146cee2743d9eb091bd
        this.setState({teams: response});
    }

    render() {
        let content =<h3>You have not created any projects yet. <Link to="/create">Create your first project</Link></h3>;
        if(this.state.teams.length > 0){
            content =  this.state.teams.map((el,i) =>{
                return <Team key={i} name={el.name} description={el.description} teamId={el._id}/>
            })}
        return (
            <div>
<<<<<<< HEAD
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
=======
                <h1>My Projects</h1>
                {content}
>>>>>>> 23b89b5cc9346cc17d2ac146cee2743d9eb091bd
            </div>
        )
    }
}
