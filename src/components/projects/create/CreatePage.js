import React, {Component} from 'react';
import CreateForm from './CreateForm';
import {createTeam} from '../../../models/team';
import toastr from 'toastr';

export default class CreatePage extends Component {
    constructor(props){
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
        this.onCreateSuccess = this.onCreateSuccess.bind(this);

    }
    //Change state of this.props, binding them with the input fields.value with onChange handler
    onChangeHandler(ev) {
        ev.preventDefault();
        let newState = {};
        newState[ev.target.name] = ev.target.value;
        if(ev.target.name === "name"){
            if(ev.target.value.length < 3){
                newState.inputDisabled = true;
            }
            else{
                newState.inputDisabled = false;
            }
        }
        this.setState(newState);
    }

    //OnSubmit Event for the form - returns the data from the form
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();

        createTeam(this.state.name,
            this.state.description,
            this.state.beginning,
            this.state.deadline,
            this.onCreateSuccess);
    }
    //the callback for the promise
    onCreateSuccess(result){
        if(result){
            toastr.success('Project created successfully');
            this.context.router.push('/projects');
        }
        else{
            toastr.error('Error');
        }
    }
    render() {
        return (
            <div>
                <CreateForm
                    name={this.state.name}
                    description={this.state.description}
                    startDate={this.state.beginning}
                    endDate={this.state.deadline}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}
//Redirect through the Router - the Router is visible for the class
CreatePage.contextTypes = {
    router: React.PropTypes.object
};