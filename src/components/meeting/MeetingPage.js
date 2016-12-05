import React, {Component} from 'react';
import Meeting from './Meeting';
import {loadMeetings} from '../../models/team';
import {Link} from 'react-router'
//This will be controller-view component

export default class MemberProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetings: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount(){
        loadMeetings((this.props.location.pathname).split('/')[2],this.onLoadSuccess);
    }

    onLoadSuccess(response){
        this.setState({meetings: response});
        console.log(this.state.meetings)
    }

    render() {
        let content =<h3 className="text-muted">You have not created any meetings yet.</h3>;

        if(this.state.meetings.length > 0){
            content =  this.state.meetings.map((el,i) => {
                return <Meeting key={i} topic={el.topic} time={el.time} meetingId={el._id}/>
            })}
        return (
            <div>
                <h1>My Meetings</h1>
                {content}
            </div>
        )
    }
}
