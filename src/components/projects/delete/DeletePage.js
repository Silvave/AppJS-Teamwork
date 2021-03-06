import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {loadTeamDetails, deleteTeam, loadTeams} from '../../../models/team';
import toastr from 'toastr';

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
        toastr.warning('Warning, you are about to delete this team');
        this.setState({
            name: response.name,
            description: response.description,
            beginning: response.beginning,
            deadline: response.deadline,
            inputDisabled: false
        });
    }

    //OnSubmit Event for the form - returns the data from the form
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();

        deleteTeam(this.props.params.teamId,this.onDeleteSuccess)
    }

    //the callback for the promise
    onDeleteSuccess(result) {
        if(result){
            toastr.success('Project was successfully deleted');
            this.context.router.push('/projects');
        }
        else{
            toastr.error('Error occurred when trying to delete this team');
            this.context.router.push('/projects');
        }

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