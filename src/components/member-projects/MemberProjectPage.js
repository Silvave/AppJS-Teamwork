import React, {Component} from 'react';
import Team from './Team';
import {loadMemberTeams} from '../../models/team';
import {Link} from 'react-router'
//This will be controller-view component

export default class MemberProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadMemberTeams(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        console.log(response)
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
                <h1>My Projects</h1>
                {content}
            </div>
        )
    }
}
