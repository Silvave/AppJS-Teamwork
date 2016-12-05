import React, {Component} from 'react';
import Team from './Team';
import {loadMemberTeams} from '../../models/team';
import {Link} from 'react-router'
import $ from 'jquery'
//This will be controller-view component

export default class MemberProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount(){
        loadMemberTeams(this.onLoadSuccess);
    }

    onLoadSuccess(response){
        this.setState({teams: response});
    }
    onSubmit(event){
        event.preventDefault();
        console.log('a')
       sessionStorage.setItem('teamId',$(event.target).closest($('.col-sm-4')).attr('id'))

    }

    render() {
        let link = <Link to="/create">Create your first project</Link>;
        let content =<h3>You have not created any projects yet. {link}</h3>;

        if(this.state.teams.length > 0){
            content =  this.state.teams.map((el,i) => {
                return <Team key={i} name={el.name} description={el.description} teamId={el._id}/>
            })}

        return (
            <div>
                <h1>My Projects</h1>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}
