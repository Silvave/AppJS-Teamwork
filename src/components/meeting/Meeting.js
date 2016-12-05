import React, {Component} from 'react';
import './Meeting.css';


export default class Meeting extends Component{
    render(){
        return(
                <div className="col-sm-4">
                    <div className="card card-block">
                        <p className="card-text">Topic</p>
                        <h4 className="card-title">{this.props.topic}</h4>
                        <p className="card-text">Time</p>
                        <h4 className="card-title">{this.props.time}</h4>
                    </div>
                </div>
        )
    }
}