import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadMeetings,editMeeting,loadMeetingDetails} from '../../../models/meeting';
//import observer from '../../models/observer';


export default class EditPage extends Component {
    constructor(props) {
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
        this.onEditSuccess = this.onEditSuccess.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        // this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        loadMeetingDetails(this.props.params.meetingId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        console.log(response)
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
        if (ev.target.name === "topic") {
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
        console.log(this.state)
        if(this.state.topic.length < 4){
            alert('A topic for a meeting must be at least 3 characters long')
        }
        else{
            editMeeting(
                this.props.params.meetingId,
                this.state.topic,
                this.state.time,
                this.state.date,
                this.onEditSuccess)
        }
    }

    //the callback for the promise
    onEditSuccess(result) {
        this.context.router.push('/projects');
    }

    redirect(){
        this.context.router.push('/projects');
    }

    render() {
        return (
            <div>
                <h1>Edit Meeting</h1>
                <EditForm
                    topic={this.state.topic}
                    time={this.state.time}
                    date={this.state.date}
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