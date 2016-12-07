import React, {Component} from 'react';
import Team from './Team';
import {loadMemberTeams} from '../../models/team';
import $ from 'jquery'
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
        this.setState({teams: response});
    }

    render() {
        let content =<h4 className="text-muted">You are not a member of any projects yet.</h4>;

        if(this.state.teams.length > 0){
            content =  this.state.teams.map((el,i) => {
                return <Team key={i} name={el.name} description={el.description} teamId={el._id}/>
            })}

        return (
            <div >
                <h1>Projects I work on</h1>
                <div>
                    {content}
                </div>
            </div>
        )
    }
}
