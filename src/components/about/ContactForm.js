import './ContactForm.css';
import React, {Component} from 'react';

export default  class ContactForm extends Component {

    render()    {
        return (
            <div className="contactForm">
                <form onSubmit={this.props.onSubmit} id="contactUs" style={{"padding": "0.5em"}}>
                    <legend><h3>Contact us</h3></legend>
                    <label className="PersonNameL">
                        Your name:
                    </label>
                    <input
                        className="PersonNameI"
                        type="text"
                        name="userName"
                        value={this.props.userName}
                    />
                    <label className="PersonEmailL">
                        Your email:
                    </label>
                    <input
                        className="PersonEmailI"
                        type="text"
                        name="userEmail"
                        value={this.props.userEmail}
                    />
                    <label className="SubjectL">
                        Subject:
                    </label>
                    <input
                        className="SubjectI"
                        type="text"
                        name="subject"
                        value={this.props.subject}
                    />
                    <label className="MessageL">
                        Your message:
                    </label>
                    <textarea
                        className="MessageI"
                        type="text"
                        name="message"
                        value={this.props.message}
                    />
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}