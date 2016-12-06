import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadTeamDetails, editTeam, loadTeams} from '../../../models/team';
import toastr from 'toastr';
//import observer from '../../models/observer';


export default class EditPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            name: '',
            description: '',
            beginning: '',
            deadline: '',
            inputDisabled: true
        };
        //Bind functions with parent class
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onEditSuccess = this.onEditSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.redirect = this.redirect.bind(this);
        this.loadTeams = this.loadTeams.bind(this);
    }

    componentDidMount() {
        loadTeamDetails(this.props.params.teamId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        toastr.warning('Warning, you are about to edit this team');
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
        if (ev.target.name === "name") {
            if (ev.target.value.length < 3) {
                newState.inputDisabled = true;
            }
            else {
                newState.inputDisabled = false;
            }
        }
        this.setState(newState);
    }

    //OnSubmit Event for the form - returns the data from the form
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();
        if(this.state.name.length < 4){
            alert('Team name must be at least 3 chars long')
        }
        else{
            editTeam(
                this.props.params.teamId,
                this.state.name,
                this.state.description,
                this.state.beginning,
                this.state.deadline,
                this.onEditSuccess)
        }
    }

    //the callback for the promise
    onEditSuccess(result) {
        if(result){
            toastr.success('Team was successfully edited');
            this.context.router.push('/projects');
        }
        else{
            toastr.error('Error occurred when trying to edit this team')
            this.context.router.push('/projects');
        }
        
    }
    redirect(ev){
        ev.preventDefault();//prevent form submittion(delete team)
        loadTeams(this.loadTeams);
    }
    loadTeams(){
        this.context.router.push('/projects');
    }

    render() {
        return (
            <div>
                <h1>Edit Team Page</h1>
                <EditForm
                    name={this.state.name}
                    description={this.state.description}
                    beginning={this.state.beginning}
                    deadline={this.state.deadline}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                    redirect={this.redirect}
                />
            </div>
        )
    }
}
//Redirect through the Router - the Router is visible for the class
EditPage.contextTypes = {
    router: React.PropTypes.object
};