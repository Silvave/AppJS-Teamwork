import './ContactForm.css';
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default  class ContactForm extends Component {

    render()    {
        return (
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
            <div className="contactForm">
                <form onSubmit={this.props.onSubmit} id="contactUs" style={{"padding": "0.5em"}}>
                    <legend><h2>Contact us</h2></legend>
                    <label className="PersonNameL">
                        Your name:
                    </label>
                    <input
                        className="PersonNameI"
                        type="text"
                        name="userName"
                        value={this.props.userName}
                        onChange={this.props.onChange}
                    />
                    <label className="PersonEmailL">
                        Your email:
                    </label>
                    <input
                        className="PersonEmailI"
                        type="text"
                        name="userEmail"
                        value={this.props.userEmail}
                        onChange={this.props.onChange}
                    />
                    <label className="SubjectL">
                        Subject:
                    </label>
                    <input
                        className="SubjectI"
                        type="text"
                        name="subject"
                        value={this.props.subject}
                        onChange={this.props.onChange}
                    />
                    <label className="MessageL">
                        Your message:
                    </label>
                    <textarea
                        className="MessageI"
                        type="text"
                        name="message"
                        value={this.props.message}
                        onChange={this.props.onChange}
                    />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}