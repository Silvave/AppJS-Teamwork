import React, {Component} from 'react';
import './Meeting.css';


export default class Meeting extends Component{
    render(){
        return(
                <div className="myMeetigns">
                    <form className="myMeetings" >
                    <div className="myMeetingsHeading">
                        <p>Topic</p>
                        <h4>{this.props.topic}</h4>
                    </div>
                        <p>Time</p>
                        <h4>{this.props.time}</h4>
                        <p>Date</p>
                        <h4>{this.props.date}</h4>
                    </form>
                </div>
        )
    }
}