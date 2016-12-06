import React, {Component} from 'react';
import './AboutPage.css';
import Map from './Map';
import ContactForm from './ContactForm';
import LinksSocialMedia from './LinksSocialMedia';
import {addNewMessage} from '../../models/contactUs';


export default class AboutPage extends Component {
    constructor(props) {
        //Get props from the parent
        super(props);
        //Set default state
        this.state = {
            userName: '',
            userEmail: '',
            subject: '',
            message: ''
        };
        //Bind functions with parent class
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    //OnSubmit Event for the form - returns the data from the form
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();
        //use this for prevent form to be submitted more than once

        addNewMessage(this.props.userName, this.props.userEmail, this.props.subject, this.props.message);

    }

    //the callback for the promise
    render() {
        return (
            <table>
                <tr><td><ContactForm
                    userName={this.props.userName}
                    userEmail={this.props.userEmail}
                    subject={this.props.subject}
                    message={this.props.message}
                    onSubmit={this.onSubmitHandler}
                /></td><td><Map/></td><td className="media"><LinksSocialMedia/></td></tr>
            </table>
        )
    }

}
