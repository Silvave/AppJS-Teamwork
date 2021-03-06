import React, {Component} from 'react';
import Project from './Projects';
import {loadTeams} from '../../models/team';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//This will be controller-view component

export default class ProjectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    componentDidMount(){
        loadTeams(this.onLoadSuccess);
    }
    onLoadSuccess(response){
        this.setState({teams: response});
    }

    render() {
        let content =<h3>You have not created any projects yet. <Link to="/create">Create your first project</Link></h3>;
        if(this.state.teams.length > 0){
            content =  this.state.teams.map((el,i) =>{
                return <Project key={i}
                                name={el.name}
                                description={el.description}
                                teamId={el._id}
                                beginning={el.beginning}
                                deadline={el.deadline}
                />
            })}
        return (

            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
            <div>
                <h2>My Projects</h2>
                {content}
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}
