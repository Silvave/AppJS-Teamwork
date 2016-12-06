import React, {Component} from 'react';
import Meeting from './Meeting';
import {loadMeetings} from '../../../models/meeting';
// import {Link} from 'react-router'
//This will be controller-view component

export default class EditMeetingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: []
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount(){
        loadMeetings(this.props.params.teamId,this.onLoadSuccess);
    }

    onLoadSuccess(response){
        this.setState({meetings: response});
        console.log(this.state.meetings)
    }

    render() {
        let content =<h3 className="text-muted">There are no meeting to be edited.</h3>;

        if(this.state.meetings.length > 0){
            content =  this.state.meetings.map((el,i) => {
                return <Meeting key={i}
                                topic={el.topic}
                                time={el.time}
                                date={el.date}
                                meetingId={el._id}
                                teamId={(this.props.location.pathname).split('/')[2]}/>
            })}
        return (
            <div>
                <h1>Edit Meetings</h1>
                {content}
            </div>
        )
    }
}
