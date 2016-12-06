import React, {Component} from 'react';
import CreateForm from './CreateForm';
 import {createMeeting} from '../../../models/meeting';
// import {addUserToTeam} from '../../../models/user'
//import observer from '../../models/observer';
import toastr from 'toastr';


export default class CreatePage extends Component {
    constructor(props){
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            topic: '',
            time: '',
            date:'',
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

        if(ev.target.name === "topic"){

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
        console.log()
        createMeeting(
            this.props.location.pathname.split('/')[2]
            ,this.state.topic,
            this.state.time,
            this.state.date,
            this.onCreateSuccess);
    }
    //the callback for the promise
    onCreateSuccess(result){
        toastr.success('Meeting created');
        this.context.router.goBack();
        // alert('success');
        // this.context.router.push('/projects');
    }
    render() {
        return (
            <div>
                <h1>Create Meeting</h1>
                <CreateForm
                    topic={this.state.topic}
                    time={this.state.time}
                    da={this.state.time}
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