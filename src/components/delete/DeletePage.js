import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {loadDetails, deleteTeam} from '../../models/team';
//import observer from '../../models/observer';

export default class DeletePage extends Component {
    constructor(props) {
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
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadDetails(this.props.params.teamId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            name: response.name,
            description: response.description,
            inputDisabled: false
        });
    }

    //Change state of this.props, binding them with the input fields.value with onChange handler
    onChangeHandler(ev) {
        ev.preventDefault();
        let newState = {};
        newState[ev.target.name] = ev.target.value;
        if (ev.target.name === "name") {
            if (ev.target.value.length < 4) {
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
            deleteTeam(this.props.params.teamId,this.onDeleteSuccess)
        }
    }

    //the callback for the promise
    onDeleteSuccess(result) {
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