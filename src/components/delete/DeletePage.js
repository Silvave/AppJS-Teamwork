import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {delete} from '../../models/team';
//import observer from '../../models/observer';


export default class DeletePage extends Component {
    constructor(props){
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            name: '',
            description: '',
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
            if(ev.target.value.length < 4){
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

        del(this.state.name,
            this.state.description,
            this.onCreateSuccess);

    }
    //the callback for the promise
    onCreateSuccess(result){
        alert('success');
        this.context.router.push('/catalog');
    }
    render() {
        return (
            <div>
                <h1>Delete Team Page</h1>
                <DeleteForm
                    name={this.state.name}
                    description={this.state.description}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        )
    }
}
//Redirect through the Router - the Router is visible for the class
DeletePage.contextTypes = {
    router: React.PropTypes.object
};