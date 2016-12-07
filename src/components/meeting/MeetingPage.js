import React, {Component} from 'react';
import Meeting from './Meeting';
import {loadMeetings} from '../../models/meeting';

export default class MemberProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount(){
        let teamId = (this.props.location.pathname).split('/')[2];
        loadMeetings(teamId,this.onLoadSuccess);
    }

    onLoadSuccess(response){
        this.setState({meetings: response});
        console.log(this.state.meetings)
    }

    render() {
        let content =<h3 className="text-muted">You have not created any meetings yet.</h3>;

        if(this.state.meetings.length > 0){
            content =  this.state.meetings.map((el,i) => {
                return <Meeting key={i} topic={el.topic} time={el.time} date={el.date} meetingId={el._id}/>
            })}
        return (
            <div>
                <h1>My Meetings</h1>
                {content}
            </div>
        )
    }
}
