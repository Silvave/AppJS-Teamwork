import React, {Component} from 'react';
//Make the greeting element in the page
export default class Greeting extends Component{
    render(){
        if(!this.props.loggedIn){return null};//Prevent returning the <span>
        return(
            <span>Welcome, {this.props.username}</span>
        )
    }
}