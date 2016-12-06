import React, {Component} from 'react';
import './AboutPage.css';
import Map from './Map';
import ContactForm from './ContactForm';
import LinksSocialMedia from './LinksSocialMedia';
import {addNewMessage} from '../../models/contactUs';
import toastr from 'toastr';


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
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    //OnSubmit Event for the form - returns the data from the form
    onChangeHandler(ev){
        ev.preventDefault();
        let newState = [];
        newState[ev.target.name] = ev.target.value;
        this.setState(newState);
    }
    onSubmitHandler(ev) {
        //Prevent refreshing the page
        ev.preventDefault();
        addNewMessage(this.state.userName, this.state.userEmail, this.state.subject, this.state.message, this.redirect);
    }
    redirect(){
        toastr.success('Message send');
        this.context.router.goBack();
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
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                /></td><td><Map/></td><td className="media"><LinksSocialMedia/></td></tr>
            </table>
        )
    }

}
AboutPage.contextTypes = {
    router: React.PropTypes.object
};
