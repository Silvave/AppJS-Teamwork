import React, {Component} from 'react';
import DeleteForm from './DeleteForm';
import {loadMeetings, deleteMeeting, loadMeetingDetails} from '../../../models/meeting';
import toastr from 'toastr';

export default class DeletePage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            topic: '',
            time: '',
            date: ''
        };
        //Bind functions with parent class
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onDeleteSuccess = this.onDeleteSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.redirectToMeetings = this.redirectToMeetings.bind(this);

        this.loadMeetings = this.loadMeetings.bind(this);
    }

    componentDidMount() {
        loadMeetingDetails(this.props.params.meetingId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        toastr.warning('Warning, you are about to delete this Meeting');
        this.setState({
            topic: response.topic,
            time: response.time,
            date: response.date,
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
        deleteMeeting(this.props.params.meetingId, this.props.params.teamId, this.onDeleteSuccess)

    }

    //the callback for the promise
    onDeleteSuccess(result) {
        toastr.success('Team was successfully deleted');
        this.context.router.push('/projects');
    }

    //Redirect without ajax call on Cancel form
    redirectToMeetings(ev) {
        ev.preventDefault();//prevent form submittion(delete team)
        loadMeetings(this.loadMeetings);
    }

    loadMeetings() {
        this.context.router.push('/projects');
    }

    render() {
        return (
            <div>
                <h1>Delete Meeting Page</h1>
                <DeleteForm
                    topic={this.state.topic}
                    time={this.state.time}
                    date={this.state.date}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                    redirect={this.redirectToMeetings}
                />
            </div>
        )
    }
}
//Redirect through the Router - the Router is visible for the class
DeletePage.contextTypes = {
    router: React.PropTypes.object
};