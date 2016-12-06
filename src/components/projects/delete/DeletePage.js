import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {loadTeamDetails, deleteTeam, loadTeams} from '../../../models/team';

export default class DeletePage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            name: '',
            description: '',
            beginning: '',
            deadline: ''
        };
        //Bind functions with parent class
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.redirectToCatalog = this.redirectToCatalog.bind(this);

        this.loadTeams = this.loadTeams.bind(this);
    }

    componentDidMount() {
        loadTeamDetails(this.props.params.teamId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            name: response.name,
            description: response.description,
            beginning: response.beginning,
            deadline: response.deadline,
            inputDisabled: false
        });
    }

    //Change state of this.props, binding them with the input fields.value with onChange handler
    onChangeHandler(ev) {
        ev.preventDefault();
        let newState = {};
        newState[ev.target.name] = ev.target.value;
        this.setState(newState);
    }

    //OnSubmit Event for the form - returns the data from the form
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();
        if(this.state.name.length < 3){
            alert('Team name must be at least 3 chars long')
        }
        else{
            deleteTeam(this.props.params.teamId,this.onDeleteSuccess)
        }
    }

    //the callback for the promise
    onDeleteSuccess(result) {
        this.context.router.push('/projects');
    }
    //Redirect without ajax call on Cancel form
    redirectToCatalog(ev){
        ev.preventDefault();//prevent form submittion(delete team)
        loadTeams(this.loadTeams);
    }
    loadTeams(){
        this.context.router.push('/projects');
    }

    render() {
        return (
            <div>
                <h1>Delete Team Page</h1>
                <DeleteForm
                    name={this.state.name}
                    description={this.state.description}
                    beginning={this.state.beginning}
                    deadline={this.state.deadline}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                    redirect={this.redirectToCatalog}
                />
            </div>
        )
    }
}
//Redirect through the Router - the Router is visible for the class
DeletePage.contextTypes = {
    router: React.PropTypes.object
};