import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../../models/user';
import observer from '../../../models/observer';


export default class RegisterPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            username: '',
            password: '',
            repeat: '',
            ['member-of']: [],
            inputDisabled: false
        };
        //Bind functions with parent class
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
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
        //use this for prevent form to be submitted more than once
        this.setState({
            inputDisabled: true
        });
        //Some validations
        if (this.state.password !== this.state.repeat) {
            this.setState({
                inputDisabled: false
            });
            alert('passwords do not match')
        }
        else {
            register(this.state.username, this.state.password, this.onRegisterSuccess);
        }
        //send data and callback function for the ajax request

    }

    //the callback for the promise
    onRegisterSuccess(result) {
        this.setState({
            inputDisabled: false
        });
        //Use the observer here to update the session and reload links when login/register
        observer.onSessionUpdate();
        //redirect user to 'Home' when login is success
        this.context.router.push('/');
    }

    render() {
        //Prevent logged user to see login/register forms
        if (sessionStorage.getItem('username')) {
            this.context.router.push('/');
        }
        return (
            <div>
                <h1>Register</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}

//Redirect through the Router - the Router is visible for the class
RegisterPage.contextTypes = {
    router: React.PropTypes.object
};