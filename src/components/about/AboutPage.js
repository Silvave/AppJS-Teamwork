import React, {Component} from 'react';
import './AboutPage.css';
import Map from './Map';
import ContactForm from './ContactForm';
import LinksSocialMedia from './LinksSocialMedia';
import addNewMessage from '../../models/contactUs';


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
        this.setState({
            inputDisabled: true
        });
        addNewMessage(this.state.userName, this.state.userEmail, this.state.subject, this.state.message);

        //send data and callback function for the ajax request
    }

    //the callback for the promise
    render() {
        return (
            <table>
                <tr><td><ContactForm
                    userName={this.state.userName}
                    userEmail={this.state.userEmail}
                    subject={this.state.subject}
                    message={this.state.message}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                /></td><td><Map/></td><td className="media"><LinksSocialMedia/></td></tr>
            </table>
        )
    }

}
