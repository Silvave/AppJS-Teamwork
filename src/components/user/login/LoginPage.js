import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../models/user';
import observer from '../../../models/observer';


export default class LoginPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            username: '',
            password: '',
            inputDisabled: false
        };
        //Bind functions with parent class
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
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
        this.setState({
            inputDisabled: true
        });
        //send data and callback function for the ajax request(models/user)
        login(this.state.username, this.state.password, this.onLoginSuccess);
    }

    //the callback for the promise
    onLoginSuccess(result) {
        //unlock the form if we have success
        this.setState({
            inputDisabled: false
        });
        if (result) {
            //Use the observer here to update the session and reload links when login/register
            observer.onSessionUpdate();
            //redirect user to 'Home' when login is success
            this.context.router.push('/');
        }
    }

    render() {
        //Prevent logged user to see login/register forms
        if (sessionStorage.getItem('username')) {
            this.context.router.push('/');
        }
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}

//Redirect through the Router - the Router is visible for the class
LoginPage.contextTypes = {
    router: React.PropTypes.object
};